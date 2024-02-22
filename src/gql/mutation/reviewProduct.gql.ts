import { gql } from '@apollo/client';

export const _REATE_PRODUCT = gql`
  mutation Mutation($input: ReatingInp) {
    RATE_PRODUCT(input: $input)
  }
`;
