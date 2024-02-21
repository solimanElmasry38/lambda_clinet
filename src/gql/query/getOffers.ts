import { gql } from '@apollo/client';

export const _GetOffers = gql`
  query OFFERS_GET($input: offerInp) {
    OFFERS_GET(input: $input) {
      id
      name
      img
    }
  }
`;
