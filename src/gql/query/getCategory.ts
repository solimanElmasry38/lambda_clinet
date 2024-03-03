import { gql } from '@apollo/client';

export const _GetCategory = gql`
  query GET_CATEGORY($input: CategInp) {
    GET_CATEGORY(input: $input) {
      name
      id
      img
      product {
        id
        name
        img
        price
        count
        is_available
        desc
      }
    }
  }
`;
