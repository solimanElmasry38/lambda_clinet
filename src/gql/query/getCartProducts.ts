import { gql } from '@apollo/client';

export const _GetCartProducts = gql`
 query Query($input: getCartInp) {
  GET_CART_PRODUCTS(input: $input) {
    TotalProductInCart
    products {
      id
      name
      img
      price
      count
      is_available
      desc
      coun_in_cart
    }
  }
}
`;
