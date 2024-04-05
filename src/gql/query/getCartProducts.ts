import { gql } from '@apollo/client';

export const _GetCartProducts = gql`
 query CART_PRODUCTS_GET($input: getCartInp) {
  CART_PRODUCTS_GET(input: $input) {
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
    TotalProductInCart
  }
}
`;
