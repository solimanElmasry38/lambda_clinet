import { gql } from '@apollo/client';

export const _GetReview = gql`
  query Query($input: GetReviewsInp) {
    GET_PRODUCT_REVIEWS(input: $input) {
      review
    }
  }
`;
