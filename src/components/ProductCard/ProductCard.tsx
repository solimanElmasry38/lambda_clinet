import  "./ProductCard.scss"
export const ProductCard = ({ data }) => {
  const { id, name, img, price, count, is_available, desc } = data;
  console.log("form com p d" + JSON.stringify(data));
  return (
    <div className="card1">
      <span >{id}</span>
      <span >{name}</span>
      <span >{img}</span>
      <span >{price}</span>
      <span >{count}</span>
      <span >{is_available}</span>
      <span >{desc}</span>

    </div>
  );
};
