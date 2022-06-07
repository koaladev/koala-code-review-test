// Fixtures
import carts from '../fixtures/cart.fixtures';
// Typescript definition for Resolvers object. Generated according to schema located in: src/pages/api/schema/index.ts
import { Resolvers } from '../generated/types';

/** Resolvers object, extend according to your schema requirements */
export const resolvers: Resolvers = {
  Query: {
    getCart: async (_, args) => {
      return carts.find((cart) => cart.id === args.cartId);
    },
  },
  Cart: {
    id: (parent) => parent.id,
    lineItems: (parent) => parent.lineItems,
  },
};
