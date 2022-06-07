import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Price {
    fractionDigits: Int
    centAmount: Int
    currencyCode: String
  }

  type DiscountedPrice {
    fractionDigits: Int
    centAmount: Int
    currencyCode: String
  }

  type LineItemPrice {
    price: Price!
    discountedPrice: DiscountedPrice
  }

  type ProductVariantAttribute {
    type: String
    label: String
    value: String
    disabled: Boolean
    swatch: [String]
    isNew: Boolean
  }

  type Image {
    src: String
  }

  type ProductVariant {
    sku: String!
    price: LineItemPrice
    productName: String
    attributes: [ProductVariantAttribute]
  }

  type LineItem {
    id: String!
    variant: ProductVariant
    quantity: Int
    thumbnailImage: Image
  }

  type Cart {
    id: String!
    # Feel free to extend this definition
    lineItems: [LineItem]
  }

  type Query {
    getCart(cartId: String!): Cart
  }
`;
