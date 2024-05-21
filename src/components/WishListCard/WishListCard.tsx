import React from 'react';
import Rating from '../Rating/Rating';
import "./WishListCard.scss"
function WishListCard({item,children}) {
  const { id, name, price, img,  desc} = item;

  return (
<div className="vertProductCard ">
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
            {price}$
           
          </p>
       
        {children}
      </div>
    </div>  
);
}

export default WishListCard;
