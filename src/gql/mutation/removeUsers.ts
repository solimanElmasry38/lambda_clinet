import { gql } from '@apollo/client';

export const _RemoveUsers = gql`
mutation REMOVER_USERS($input: removeProdInp) {
  REMOVER_USERS(input: $input)
}
`;
