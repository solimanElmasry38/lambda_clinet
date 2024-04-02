import { gql } from '@apollo/client';

export const _RemoveCategorys = gql`
mutation REMOVER_CATEGORYS($input: removeProdInp) {
  REMOVER_CATEGORYS(input: $input)
}
`;
