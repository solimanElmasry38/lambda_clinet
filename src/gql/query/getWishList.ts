import { gql } from '@apollo/client';

export const _GetWishList = gql`
query GET_WISH_LIST($input: getWishListInp) {
  GET_WISH_LIST(input: $input) {
    id
    name
    price
    img
   
    desc
    
    categorys {
      name
    }
  }
}
`;
