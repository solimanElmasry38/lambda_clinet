import { gql } from '@apollo/client';

export const _AddToWishList = gql`
 mutation Mutation($input: addToWishListInp) {
  ADD_TO_WISH_LIST(input: $input)
}
`;


