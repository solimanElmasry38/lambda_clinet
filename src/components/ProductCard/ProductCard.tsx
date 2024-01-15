import "./ProductCard.scss";
export const ProductCard = ({ data ,btn}) => {
  //id
  //count
  const {  name, img, price,  is_available, desc } = data;
console.log(data)
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
      {
      is_available? btn: <p>not avilable</p> 
      }
    
    </div>
  );
};
