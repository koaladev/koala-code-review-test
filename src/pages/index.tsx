import React from 'react';

import { withUrqlClient } from 'next-urql';
import { useQuery } from 'urql';

import { ProductList } from '../components/ProductList';
import { Query } from './api/generated/types';

// For simplicity, hardcoded cartID
const USER_CART_ID = 'a68268c0-f9e7-4f00-99ef-28c5945d8a60';

const Index = () => {
  // Query example on how to consume graphql API to get Cart
  const [result] = useQuery<Query>({
    query: `
      query courses($cartId: String!) {
          getCart(cartId: $cartId) {
            id
            lineItems {
              id
              quantity
              thumbnailImage {
                src
              }
              variant {
                productName
                sku
                price {
                  price {
                    fractionDigits
                    centAmount
                    currencyCode
                  }
                  discountedPrice {
                    fractionDigits
                    centAmount
                    currencyCode
                  }
                }
                attributes {
                    type
                    value
                    label
                  }
              }
            }
          }
      }
    `,
    variables: {
      cartId: USER_CART_ID,
    },
  });

  const lineItems = result.data?.getCart?.lineItems;

  return (
    <div className="antialiased w-full text-gray-700">
      <div className="max-w-screen-md mx-auto">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="font-bold text-3xl text-gray-900">
              Koala Technical Test
            </div>
            <div className="text-xl">Koala Technical Test project</div>
          </div>
        </div>
        {lineItems ? <ProductList items={lineItems} /> : 'No products in cart'}

        <div className="border-t border-gray-300 text-center py-8 text-sm">
          © Copyright {new Date().getFullYear()} Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>
        </div>
      </div>
    </div>
  );
};

export default withUrqlClient((_ssrExchange) => ({
  url: 'http://localhost:3000/api/graphql',
}))(Index);
