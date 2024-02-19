
import { gql } from "@apollo/client";

export const _GetCategorys = gql`
query GET_CATEGORYS($input: CategsInp) {
  GET_CATEGORYS(input: $input) {
    id
    name
  }
}
`;
