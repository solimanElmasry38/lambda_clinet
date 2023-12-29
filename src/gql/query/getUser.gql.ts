import { gql } from "@apollo/client";


export const _GetUser = gql`
query USER_GET($input: AuthInp) {
    USER_GET(input: $input) {
     
      user_name
      email
      img
      
    }
  }
`;



