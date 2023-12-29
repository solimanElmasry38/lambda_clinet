import { gql } from "@apollo/client";


export const _VerifyEmail = gql`
mutation VERIFY_EMAIL($input: verifyInp) {
  VERIFY_EMAIL(input: $input) {
    id
    token
  }
}
`;
