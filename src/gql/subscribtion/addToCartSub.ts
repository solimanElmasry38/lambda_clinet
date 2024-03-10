import { gql } from '@apollo/client';

export const _AddToCartSub = gql`
subscription Subscription {
  ADD_TO_CART_SUB {
    ProductsInCart
  }
}
`;
