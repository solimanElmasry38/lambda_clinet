import { CartItem } from "../CartItem/CartItem";

import "./Cart.scss";

interface Iprops {
  isVisable: boolean;

  removeProduct;
  cartVisablity;
  openCart;
  closeCart;
  cartItems;
}

export const Cart = ({
  isVisable,
  cartItems,
  cartVisablity,
  openCart,
  closeCart,
}: Iprops) => {
  return (
    <>
      <div
        className="cartIcon"
        onClick={() => {
          if (cartVisablity) {
            closeCart();
          } else {
            openCart();
          }
        }}
      >
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
      <div
        className="cartContainer"
        style={{ display: isVisable ? "block" : "none" }}
      >
        <div className="cart">
          {cartItems.length < 1 ? (
            <p className="empty">cart is emptey</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={`${item.id} ${Math.random()}`}
                id={item.id}
                quantity={item.quantity}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
