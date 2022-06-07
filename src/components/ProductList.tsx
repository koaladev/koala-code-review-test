/* eslint-disable prefer-template */
/* eslint-disable prettier/prettier */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';


import { useRouter } from 'next/router';

import QuantitySelector from './QuantitySelector';

const COLOR_LABEL = 'color';
const SIZE_LABEL = 'size';
const SIDE_LABEL = 'side';

const LOCALE = 'en-AU';
export type ColorAttribute = {
  type: 'COLOR';
  label: string;
  value: string;
  disabled?: boolean;
  swatch: string | string[];
  isNew?: boolean;
};

export type Attribute = {
  type: 'SIZE' | 'SIDE';
  label: string;
  value: string;
  disabled?: boolean;
};

type ProductVariantAttribute = ColorAttribute | Attribute;

export type SingleItem = {
  id?: string;
  variant: {
    sku: string;
    price: {
      price: {
        fractionDigits: number;
        centAmount: number;
        currencyCode: string;
      };
      discountedPrice?: {
        fractionDigits: number;
        centAmount: number;
        currencyCode: string;
      };
      discountAmount?: number;
    };
    productName?: string;
    attributes?: ProductVariantAttribute[];
  };
  quantity: number;
  thumbnailImage?: {
    src: string;
  };
};

type ProductCardProps = {
  item: SingleItem;
  removeCartItem: (cartItemId?: string) => void;
  setCartQty: ({ lineItems }: any) => void;
  actionsDisabled?: boolean;
};

const ProductCard: React.FC<ProductCardProps> = ({
  item: { id, quantity, variant, thumbnailImage },
  removeCartItem,
  setCartQty,
  actionsDisabled,
}) => {
  const productTitle = variant.productName;

  const priceAmount = variant.price.price.centAmount * quantity;
  let saleAmount;

  if (variant.price.discountedPrice)
    saleAmount = variant.price.discountedPrice.centAmount * quantity;

  const currency = variant.price.price.currencyCode;

   const formatPrice = (
    input: number | string,
    locale: string,
    _currency: string,
    pricePrecision: number,
    showCents?: boolean
  ) => {
    const price = Number(input) / 10 ** pricePrecision;
  
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: _currency,
      minimumFractionDigits: showCents ? pricePrecision : 0,
      maximumFractionDigits: pricePrecision,
    });
  
    return formatter.format(price);
  };

  
  const priceFormatted = formatPrice(
    priceAmount,
    LOCALE,
    currency,
    variant.price.price.fractionDigits,
    true
  );

  let salePriceFormatted;

  try {
    salePriceFormatted = formatPrice(
      saleAmount,
      LOCALE,
      currency,
      variant.price.price.fractionDigits,
      true
    );
  } catch (e) {
    console.log(e);
  }

  return (
    <div className="relative flex space-x-2 py-2 transition-opacity opacity-100" id={'product-card-' + id}>
      <div className="w-16 cursor-pointer md:w-20">
        <img alt="" src={thumbnailImage?.src} width={96} height={96} />
      </div>
      <div className="flex-1">
        <p className="weight-body-bold cursor-pointer hover:underline text-blue-800 text-lg font-semibold">
          {productTitle}
        </p>

        <div className="my-2">
          {variant.attributes?.map((attribute, i) => (
            <p key={i} className="text-charcoal capitalize text-sm font-light">
              {attribute.type === 'COLOR' ? COLOR_LABEL : ''}
              {attribute.type === 'SIDE' ? SIDE_LABEL : ''}
              {attribute.type === 'SIZE' ? SIZE_LABEL : ''}: {attribute.label}
            </p>
          ))}
        </div>

        <QuantitySelector
          quantity={quantity}
          onAdd={() => {
            quantity += 1;

            const lineItems = [
              {
                lineItemId: id,
                quantity,
              },
            ];

            setCartQty({ lineItems });
          }}
          onSubtract={() => {
            quantity -= 1;

            const lineItems = [
              {
                lineItemId: id,
                quantity,
              },
            ];

            setCartQty({ lineItems });
          }}
          disabled={actionsDisabled}
        />
      </div>
      <div className="flex flex-col justify-between text-right">
        <div className="self-end">
          <button
            disabled={actionsDisabled}
            className={actionsDisabled && 'text-gray-600'}
            onClick={() => {
              removeCartItem(id);
              document.querySelector('#product-card-' + id)?.classList.remove('opacity-100')
              document.querySelector('#product-card-' + id)?.classList.add('opacity-0')
            }}
          >
            Remove
          </button>
        </div>
        <div className="max-w-full">
          <div className="flex flex-col max-w-full">
            <span
              className={'text-desert font-weight-body-bold text-md my-0 whitespace-pre-wrap' + 
                (salePriceFormatted && 'line-through text-yellow-700')
              }
            >
              {priceFormatted}
            </span>
            <span className="text-desert font-weight-body-bold text-md my-0 whitespace-pre-wrap">
              {salePriceFormatted}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const VeryExpensiveCartOperationForKoalaThatCouldGoBrokeIfNotHandledProperly =
  () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  };

export const ProductList: React.FC<{
  items: SingleItem[];
}> = ({ items: initialItems }) => {
  const router = useRouter();
  const [items] = useState(initialItems);
  const [reRender, setReRender] = useState(0);
  const [, setIsLoading] = useState(false);

  const removeCartItem = (cartItemId?: string) => {
    VeryExpensiveCartOperationForKoalaThatCouldGoBrokeIfNotHandledProperly();

    const removeItemIndex = items.findIndex((item) => item?.id === cartItemId);
    delete items[removeItemIndex];
  };

  const setCartQty = (obj: any) => {
    VeryExpensiveCartOperationForKoalaThatCouldGoBrokeIfNotHandledProperly();

    const { lineItemId } = obj.lineItems[0];
    const { quantity } = obj.lineItems[0];

    const newItem = items.find((item) => item?.id === lineItemId);
    if (newItem) newItem.quantity = quantity;
    setReRender(Math.random());
  };

  return (
    <>
      <div className="divide-y divide-grey py-4 px-4">
        {items.map((item: any) => {
          return (
            <ProductCard
              key={item.id + reRender}
              item={item}
              removeCartItem={removeCartItem}
              setCartQty={setCartQty}
              actionsDisabled={false}
            />
          );
        })}
      </div>
      <div className="mt-10 flex items-center">
        <button
          onClick={() => router.reload()}
          className="py-2 px-4 border-2 bg-blue-700 text-white rounded-md font-light mx-auto"
        >
          Reset
        </button>
      </div>
    </>
  );
};
