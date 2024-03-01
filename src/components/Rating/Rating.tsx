import './Rating.scss';
import { useQuery } from '@apollo/client';

import { _GetReview } from '../../gql/query/getReview';
import { Spinner } from '../Spinner/Spinner';
function Rating({ productId }) {
  const { data, loading } = useQuery(_GetReview, {
    variables: {
      input: {
        Product_id: productId
      }
    }
  });

  if (loading) {
    return <Spinner />;
  }
  if (data) {
    return [...Array(data.GET_PRODUCT_REVIEWS.review)].map(() => {
      return (
        <span
          className="star"
          key={Math.random()}
          style={{
            color: '#ffc107'
          }}>
          &#9733;
        </span>
      );
    });
  } else {
    return [...Array(5)].map(() => {
      return (
        <span
          className="star"
          key={Math.random()}
          style={{
            color: 'gray'
          }}>
          &#9733;
        </span>
      );
    });
  }
}

export default Rating;
