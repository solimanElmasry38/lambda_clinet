import { gql } from '@apollo/client';

export const _Add = gql`
 mutation ADD_TO_CART($input: addToCartInp) {
  ADD_TO_CART(input: $input) {
    TotalProductInCart
    availability
  }
}
`;
