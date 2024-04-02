import { gql } from '@apollo/client';

export const _CreateProduct = gql`
 mutation CREATE_PRODUCT($input: createProductInp) {
  CREATE_PRODUCT(input: $input)
}
`;
