// d510b7c2-f44f-4b97-80f2-9d5fc96e3232
import { gql } from '@apollo/client';

export const _IsProductAvailable = gql`
 query Query($input: IsAvInp) {
  IS_AVILABLE(input: $input)
}
`;
