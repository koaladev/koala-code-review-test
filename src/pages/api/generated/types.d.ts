import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cart = {
  __typename?: 'Cart';
  id: Scalars['String'];
  lineItems?: Maybe<Array<Maybe<LineItem>>>;
};

export type DiscountedPrice = {
  __typename?: 'DiscountedPrice';
  centAmount?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['String']>;
  fractionDigits?: Maybe<Scalars['Int']>;
};

export type Image = {
  __typename?: 'Image';
  src?: Maybe<Scalars['String']>;
};

export type LineItem = {
  __typename?: 'LineItem';
  id: Scalars['String'];
  quantity?: Maybe<Scalars['Int']>;
  thumbnailImage?: Maybe<Image>;
  variant?: Maybe<ProductVariant>;
};

export type LineItemPrice = {
  __typename?: 'LineItemPrice';
  discountedPrice?: Maybe<DiscountedPrice>;
  price: Price;
};

export type Price = {
  __typename?: 'Price';
  centAmount?: Maybe<Scalars['Int']>;
  currencyCode?: Maybe<Scalars['String']>;
  fractionDigits?: Maybe<Scalars['Int']>;
};

export type ProductVariant = {
  __typename?: 'ProductVariant';
  attributes?: Maybe<Array<Maybe<ProductVariantAttribute>>>;
  price?: Maybe<LineItemPrice>;
  productName?: Maybe<Scalars['String']>;
  sku: Scalars['String'];
};

export type ProductVariantAttribute = {
  __typename?: 'ProductVariantAttribute';
  disabled?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  label?: Maybe<Scalars['String']>;
  swatch?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCart?: Maybe<Cart>;
};


export type QueryGetCartArgs = {
  cartId: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cart: ResolverTypeWrapper<Cart>;
  DiscountedPrice: ResolverTypeWrapper<DiscountedPrice>;
  Image: ResolverTypeWrapper<Image>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LineItem: ResolverTypeWrapper<LineItem>;
  LineItemPrice: ResolverTypeWrapper<LineItemPrice>;
  Price: ResolverTypeWrapper<Price>;
  ProductVariant: ResolverTypeWrapper<ProductVariant>;
  ProductVariantAttribute: ResolverTypeWrapper<ProductVariantAttribute>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Cart: Cart;
  DiscountedPrice: DiscountedPrice;
  Image: Image;
  Int: Scalars['Int'];
  LineItem: LineItem;
  LineItemPrice: LineItemPrice;
  Price: Price;
  ProductVariant: ProductVariant;
  ProductVariantAttribute: ProductVariantAttribute;
  Query: {};
  String: Scalars['String'];
};

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lineItems?: Resolver<Maybe<Array<Maybe<ResolversTypes['LineItem']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DiscountedPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['DiscountedPrice'] = ResolversParentTypes['DiscountedPrice']> = {
  centAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fractionDigits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['Image'] = ResolversParentTypes['Image']> = {
  src?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItem'] = ResolversParentTypes['LineItem']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnailImage?: Resolver<Maybe<ResolversTypes['Image']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['ProductVariant']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LineItemPriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['LineItemPrice'] = ResolversParentTypes['LineItemPrice']> = {
  discountedPrice?: Resolver<Maybe<ResolversTypes['DiscountedPrice']>, ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Price'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PriceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Price'] = ResolversParentTypes['Price']> = {
  centAmount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  currencyCode?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  fractionDigits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariant'] = ResolversParentTypes['ProductVariant']> = {
  attributes?: Resolver<Maybe<Array<Maybe<ResolversTypes['ProductVariantAttribute']>>>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['LineItemPrice']>, ParentType, ContextType>;
  productName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  sku?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductVariantAttributeResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductVariantAttribute'] = ResolversParentTypes['ProductVariantAttribute']> = {
  disabled?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isNew?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  label?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  swatch?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<QueryGetCartArgs, 'cartId'>>;
};

export type Resolvers<ContextType = any> = {
  Cart?: CartResolvers<ContextType>;
  DiscountedPrice?: DiscountedPriceResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  LineItem?: LineItemResolvers<ContextType>;
  LineItemPrice?: LineItemPriceResolvers<ContextType>;
  Price?: PriceResolvers<ContextType>;
  ProductVariant?: ProductVariantResolvers<ContextType>;
  ProductVariantAttribute?: ProductVariantAttributeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

