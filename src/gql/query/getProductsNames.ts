import { gql } from '@apollo/client';

export const _GetProductsNames = gql`
  query PRODUCTS_GET($input: prodsInp) {
    PRODUCTS_GET(input: $input) {
      name
    }
  }
`;
