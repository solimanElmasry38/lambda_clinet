import "./ProductCard.scss";
export const ProductCard = ({ data }) => {
  const { id, name, img, price, count, is_available, desc } = data;

  return (
    <div className="item-container">
      <div className="main-item">
        <img
          src={img}
          alt=""
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
      </div>
      <h2 className="item-heading">{name}</h2>
      <p className="item-description">{desc}</p>
      <ul className="rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </ul>
      <p className="item-price">
        <sup>$</sup>
        {price}
      </p>
      <button className="item-cart-btn">Add To Cart</button>
    </div>
  );
};
