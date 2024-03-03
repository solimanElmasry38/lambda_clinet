import Rating from '../Rating/Rating';
import Ratio from '../Ratio/Ratio';
import './ProductCard.scss';
export const ProductCard = ({ data, children }) => {
  //count
  // is_available,
  const { id, name, img, price, desc } = data;
  return (
    <div className="item-container">
      <div className="main-item">
        <Ratio ratio={'4x3'}>
          <img src={img} alt="" />
        </Ratio>
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

      {children}
    </div>
  );
};
