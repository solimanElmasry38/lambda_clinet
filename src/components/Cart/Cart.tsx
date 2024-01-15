import { Ts } from "../../pages/home/home";
import "./Cart.scss";
interface Iprops {
  isVisable: boolean;
  products: Ts[];
  onProductRemove(): void;
  onQuantityChange(): void;
}
export const Cart = ({
  isVisable,
  products,
  onProductRemove,
  onQuantityChange,
}: Iprops) => {
  console.log("vvis" + isVisable);
  console.log(products);
  console.log(onProductRemove);
  console.log(onQuantityChange);
console.log("len"+products.length)
  return (
    <div
      className="cartContainer"
      style={{ display: isVisable ? "block" : "none" }}
    >
      <div className="cart">
        {products.length < 2 ? (
          <p className="empty">cart is emptey</p>
        ) : (
          products.map((product) => (
            <div className="cartProdContainer" key={product.id}>
              <img
                className="productImage"
                src={product.img}
                alt={product.name}
              />
              <div className="price">
                <p className="productName">{product.name}</p>
                <p className="productPrice">
                  {product.price}$*{3}
                </p>
              </div>
              <div className="count">
                <i className="fa-solid fa-trash"></i>
                <p className="total">{product.price * 3}$</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
