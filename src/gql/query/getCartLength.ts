


  import { gql } from '@apollo/client';

export const _GetCartLength = gql`
query Query($input: getCartInp) {
    GET_CART_PRODUCTS(input: $input) {
      TotalProductInCart
    }
  }
`;
