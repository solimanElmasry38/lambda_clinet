import { gql } from "@apollo/client";

export const _GetProducts = gql`
  query PRODUCTS_GET {
    PRODUCTS_GET {
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
