import { singleItemListFixture } from './productList.fixtures';

const cartFixture = [
  {
    type: 'Cart',
    id: 'a68268c0-f9e7-4f00-99ef-28c5945d8a60',
    customerId: 'bcaba39d-2f97-487f-a638-781834017d2e',
    customerEmail: 'joey@koala.com',
    anonymousId: '8d2ecb61-58cd-432c-a0f4-96c562499b90',
    locale: 'en-AU',
    lineItems: singleItemListFixture,
    shippingAddress: {
      firstName: 'Joey',
      lastName: 'The Koala',
      streetName: "Unit 12/37-41 O'Riordan Street",
      postalCode: '2015',
      city: 'Alexandria',
      state: 'NSW',
      country: 'AU',
      phone: '0400 000 000',
      email: 'joey@koala.com',
      custom: {
        type: {
          typeId: 'type',
          id: '7fb2bc69-34ba-47e5-a163-68b08fa4f95c',
        },
        fields: {
          ladderService: false,
        },
      },
    },
    billingAddress: {
      firstName: 'Joey',
      lastName: 'The Koala',
      streetName: "Unit 12/37-41 O'Riordan Street",
      postalCode: '2015',
      city: 'Alexandria',
      state: 'NSW',
      country: 'AU',
      phone: '0400 000 000',
      email: 'joey@koala.com',
    },
  },
];

export default cartFixture;
