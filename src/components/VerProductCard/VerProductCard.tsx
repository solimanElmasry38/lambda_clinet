import React from 'react';

import './VerProductCard.scss';

import { useQuery } from '@apollo/client';
import { _GetProduct } from '../../gql/query/getProduct.gql';
import { Spinner } from '../Spinner/Spinner';
import Rating from '../Rating/Rating';
// import Rating from '../Rating/rating';
function VerProductCard({ item, IsCartProduct, children }) {
  console.log(item)
  // const { id, quantity } = datas;
// console.log(datas)
  // const { data, loading } = useQuery(_GetProduct, {
  //   variables: {
  //     input: {
  //       id
  //     }
  //   }
  // });
  // if (loading) {
  //   return <Spinner />;
  // }

  return (
    <div className="vertProductCard">
      <div className="imgContainer">
        <img src={item.img} alt="" />
      </div>
      <div className="DetailsContainer">
        <h2 className="item-heading">
          <a href={`/products/${item.id}`}>{item.name}</a>
        </h2>
        <p className="item-description">{item.desc}</p>
        <div className="ReatingContainer">
          <Rating productId={item.id} />
        </div>

        {IsCartProduct ? (
          <p className="item-price">
            {item.price}$*
            {item.coun_in_cart}={item.price * item.coun_in_cart}$
          </p>
        ) : (
          <p className="item-price">${item.price}</p>
        )}
        {children}
      </div>
    </div>
  );
}

export default VerProductCard;
