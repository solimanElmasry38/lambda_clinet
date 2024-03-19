import { gql } from '@apollo/client';

export const _GetProducts = gql`
  query PRODUCTS_GET($input: prodsInp) {
    PRODUCTS_GET(input: $input) {
      id

      name

     
      count
      desc
      img
      is_available
      price
      categorys {
        name
      }
    }
  }
`;
