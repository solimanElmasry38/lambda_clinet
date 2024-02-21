import { gql } from '@apollo/client';

export const _GetProducts = gql`
  query PRODUCTS_GET($input: prodsInp) {
    PRODUCTS_GET(input: $input) {
      name

      categorys {
        name
      }
      count
      id
      desc
      img
      is_available
      price
    }
  }
`;
