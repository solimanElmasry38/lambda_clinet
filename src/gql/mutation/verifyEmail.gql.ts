import { gql } from "@apollo/client";


export const _VerifyEmail = gql`
  mutation VERIFY_EMAIL($otp: String, $id: ID) {
    VERIFY_EMAIL(otp: $otp, id: $id){
        token,
        id
    }
  }
`;
