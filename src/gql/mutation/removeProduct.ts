import { gql } from '@apollo/client';

export const _RemoveProduct = gql`
 mutation Mutation($input: removeProdInp) {
  REMOVE_PRODUCT(input: $input)
}
`;
