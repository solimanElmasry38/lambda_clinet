import Rating from '../Rating/Rating';
import Ratio from '../Ratio/Ratio';
import './ProductCard.scss';

import { _AddToWishList } from '../../gql/mutation/addToWishList';

import { _IsInWishList } from '../../gql/query/isInWishList';
import { _RemoveFromWishList } from '../../gql/mutation/removeFromWishList';
import { WishListBtn } from '../WishListBtn/wishLIstBtn';

export const ProductCard = ({ data, children }) => {
  const { id, name, img, price, desc } = data;

  return (
    <div className="item-container">
      <div className="main-item">
       
          <img src={img} alt="" />
          
      </div>
      <h2 className="item-heading">
        <a href={`/products/${id}`}>{name}</a>
      </h2>
      <p className="item-description">{desc}</p>
      <div className="rating">
        <Rating productId={id} />
      </div>
      <p className="item-price">
        <sup>$</sup>
        {price}
      </p>
      <WishListBtn data={data} />
      {children}
    </div>
  );
};
