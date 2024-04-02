import { gql } from '@apollo/client';

export const _CreateCategory = gql`
 mutation CREATE_CATEGORY($input: createCategoryInp) {
  CREATE_CATEGORY(input: $input)
}

`;
