import { gql } from '@apollo/client';

export const _RemoveOffers = gql`
 mutation REMOVER_OFFERS($input: removeProdInp) {
  REMOVER_OFFERS(input: $input)
}
`;
