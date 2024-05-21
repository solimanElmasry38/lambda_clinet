import { gql } from '@apollo/client';

export const _RemoveFromWishList = gql`
mutation Mutation($input: removeFromWishListInp) {
  REMOVE_FROM_WISH_LIST(input: $input)
}
`;
