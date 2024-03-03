import { gql } from '@apollo/client';

export const _GetCategorys = gql`
  query GET_CATEGORYS {
    GET_CATEGORYS {
      id
      name
    }
  }
`;
