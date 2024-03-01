import React from 'react';

import './VerProductCard.scss';

import { useQuery } from '@apollo/client';
import { _GetProduct } from '../../gql/query/getProduct.gql';
import { Spinner } from '../Spinner/Spinner';
import Rating from '../Rating/Rating';
// import Rating from '../Rating/rating';
function VerProductCard({ datas, IsCartProduct, children }) {
  const { id, quantity } = datas;

  const { data, loading } = useQuery(_GetProduct, {
    variables: {
      input: {
        id
      }
    }
  });
  if (loading) {
    return <Spinner />;
  }
  


  return (
    <div className="vertProductCard">
      <div className="imgContainer">
        <img src={data.PRODUCT_GET.img} alt="" />
      </div>
      <div className="DetailsContainer">
        <h2 className="item-heading">
          <a href={`/products/${id}`}>{data.PRODUCT_GET.name}</a>
        </h2>
        <p className="item-description">{data.PRODUCT_GET.desc}</p>
        <div className="ReatingContainer">
          <Rating productId={id} />
          </div>
     
        {IsCartProduct ? (
          <p className="item-price">
            {data.PRODUCT_GET.price}$*
            {quantity}={data.PRODUCT_GET.price * quantity}$
          </p>
        ) : (
          <p className="item-price">${data.PRODUCT_GET.price}</p>
        )}
        {children}
      </div>
    </div>
  );
}

export default VerProductCard;

