import { gql } from '@apollo/client';

export const _CreateUser = gql`
  mutation USER_CREATE($input: UserInp) {
    USER_CREATE(input: $input) {
      id
    }
  }
`;
