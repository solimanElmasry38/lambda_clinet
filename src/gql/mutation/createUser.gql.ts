import {gql} from "@apollo/client";

export const CREATE_USER_M=gql`
    mutation USER_CREATE(
        $email: String!,
        $img: String!,
        $password: String!,
        $user_name: String!,
    ){
        USER_CREATE( 
        email: $email
        img: $img
        password: $password
        user_name: $user_name
        ){
            id
        }
    }
`