import { gql } from '@apollo/client';

export const _Login = gql`
  mutation LOGIN($input: LoginInp) {
    LOGIN(input: $input) {
      id
      token
    }
  }
`;
