
  import { gql } from '@apollo/client';

export const _GetCartCount = gql`query Query($input: getCartCountInp) {
    GET_CART_COUNT(input: $input)
  }

`;
