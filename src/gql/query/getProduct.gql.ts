import { gql } from '@apollo/client';

export const _GetProduct = gql`
  query PRODUCT_GET($input: prodInp) {
    PRODUCT_GET(input: $input) {
      id
      name
      img
      price
      count
      is_available
      desc
    }
  }
`;
