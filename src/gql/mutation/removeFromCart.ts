import { gql } from '@apollo/client';

export const _RemoveFromCart = gql`
  mutation Mutation($input: removeFromCartInp) {
  REMOVE_FROM_CART(input: $input)
}
`;
