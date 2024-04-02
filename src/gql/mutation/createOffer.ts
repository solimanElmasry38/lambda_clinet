import { gql } from '@apollo/client';

export const _CreateOffer = gql`
mutation CREATE_OFFER($input: createOfferInp) {
  CREATE_OFFER(input: $input)
}
`;
