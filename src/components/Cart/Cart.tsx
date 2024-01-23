import { cartProducts } from "../../pages/home/home";
import "./Cart.scss";
interface Iprops {
  isVisable: boolean;
  products: cartProducts[];

}
export const Cart = ({
  isVisable,
  products,
  
}: Iprops) => {
  
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
            <div className="cartProdContainer" key={product.id+`${Math.random()}`}>
              <img
                className="productImage"
                src={product.img}
                alt={product.name}
              />
              <div className="price">
                <p className="productName">{product.name}</p>
                <p className="productPrice">
                  {product.price}$*{product.quantity}
                </p>
              </div>
              <div className="count">
                <i className="fa-solid fa-trash"></i>
                <p className="total">{product.price * product.quantity}$</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
