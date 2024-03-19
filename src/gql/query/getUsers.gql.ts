

  import { gql } from '@apollo/client';

export const _GetUsers = gql`
  query USERS_GET($input: AuthInp) {
    USERS_GET(input: $input) {
      id
      user_name
      email
    
      joined_at
      last_update
     
    }
  }
`;
