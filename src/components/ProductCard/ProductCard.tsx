import Rating from '../Rating/rating';
import './ProductCard.scss';
export const ProductCard = ({ data, children }) => {
  //count
  // is_available,
  const { id, name, img, price, desc } = data;

  return (
    <div className="item-container">
      <div className="main-item">
        <img src={img} alt="" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      </div>
      <h2 className="item-heading">
        <a href={`/products/${id}`}>{name}</a>
      </h2>
      <p className="item-description">{desc}</p>
      <Rating productId={id} />

      <p className="item-price">
        <sup>$</sup>
        {price}
      </p>

      {children}
    </div>
  );
};
