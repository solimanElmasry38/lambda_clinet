import React, { useState } from "react";
import "./rating.scss";
function Rating() {
  const [rating, setRating] = useState<null | number>(null);
  const [hover, setHover] = useState<null | number>(null);
  const totalStars = 5;
  return [...Array(totalStars)].map((_star, index) => {
    const currentRating = index + 1;

    return (
      <label key={index}>
        <input
          type="radio"
          name="rating"
          value={currentRating}
          onChange={() => setRating(currentRating)}
        />
        <span
          className="star"
          style={{
            color: currentRating <= (hover || rating!) ? "#ffc107" : "#e4e5e9",
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
