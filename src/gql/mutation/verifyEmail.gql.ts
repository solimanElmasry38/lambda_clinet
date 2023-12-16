import { gql } from "@apollo/client";


export const VerifyEmail_sch = gql`
  mutation VERIFY_EMAIL($otp: String, $id: ID) {
    VERIFY_EMAIL(otp: $otp, id: $id){
        token,
        id
    }
  }
`;
