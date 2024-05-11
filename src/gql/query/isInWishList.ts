import { gql } from '@apollo/client';

export const _IsInWishList = gql`
  query Query($input: isInWishInp) {
  IS_IN_WISH_LIST(input: $input)
}
`;
