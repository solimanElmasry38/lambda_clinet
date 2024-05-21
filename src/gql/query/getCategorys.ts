import { gql } from '@apollo/client';

export const _GetCategorys = gql`
query Query($input: CategsInp) {
  GET_CATEGORYS(input: $input) {
    name
    
    product {
      name
      coun_in_cart
      count
      desc
      id
      img
      is_available
      price
    }
  }
}
`;
