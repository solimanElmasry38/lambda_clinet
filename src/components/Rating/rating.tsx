import React, { useState } from 'react';
import Cookies from 'js-cookie';

import './rating.scss';
import { useMutation } from '@apollo/client';
import { _REATE_PRODUCT } from '../../gql/mutation/reviewProduct.gql';
function Rating({ productId }) {
  const [rating, setRating] = useState<null | number>(0);

  const [hover, setHover] = useState<null | number>(null);
  const user_id = Cookies.get('lambda_usr_id');

  const [RATE_PRODUCT, ReatingProductQuery] = useMutation(_REATE_PRODUCT, {
    variables: {
      input: {
        product_id: productId,
        reating: rating,
        user_id: user_id
      }
    }
  });

  const totalStars = 5;
  return [...Array(totalStars)].map((_star, index) => {
    const currentRating = index + 1;
    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={currentRating}
          onChange={async () => {
            setRating(currentRating);
            await RATE_PRODUCT();
          }}
        />
        <span
          className="star"
          style={{
            color: currentRating <= (hover || rating!) ? '#ffc107' : '#e4e5e9'
          }}
          onMouseEnter={() => setHover(currentRating)}
          onMouseLeave={() => setHover(null)}
        >
          &#9733;
        </span>
      </label>
    );
  });
}

export default Rating;
