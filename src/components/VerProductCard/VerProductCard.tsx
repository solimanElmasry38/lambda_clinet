import React from 'react';
import Rating from '../Rating/rating';
import './VerProductCard.scss';
function VerProductCard({ data, children }) {
  const { id, name, img, price, desc } = data;

  return (
    <div className="vertProductCard">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <div className="DetailsContainer">
        <h2 className="item-heading">
          <a href={`/products/${id}`}>{name}</a>
        </h2>
        <p className="item-description">{desc}</p>
        <div className="ReatingContainer">
          <Rating productId={id} />
        </div>

        
        <p className="item-price">
          <sup>$</sup>
          {price}
        </p>

        {children}
      </div>
      
    </div>
  );
}

export default VerProductCard;
