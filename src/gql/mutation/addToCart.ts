import { gql } from '@apollo/client';

export const _Add = gql`
 mutation Mutation($input: addToCartInp) {
  ADD_TO_CART(input: $input) {
    availability
    cartLength
  }
}
`;


