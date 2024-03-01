import { useCart } from '../../context/cartCtx';

import VerProductCard from '../../components/VerProductCard/VerProductCard';
import './Cart.scss';

import { _GetProduct } from '../../gql/query/getProduct.gql';

export const Cart = () => {
  const { removeFromCart, cartItems, cartQuantity } = useCart();

  const totalPrice = cartItems.reduce((total, item) => {
    // Fetch product price from wherever you get your product data
    const productPrice = item.price; // Replace 10 with the actual price of the product
    return total + item.quantity * productPrice;
  }, 0);
  return (
    <>
      <div className="cartContainer">
        <div className="cart">
          {cartItems.length < 1 ? (
            <p className="empty">cart is emptey</p>
          ) : (
            cartItems.map((item: { id: string; quantity: number }) => (
              <VerProductCard datas={item} key={item.id + Math.random()} IsCartProduct={true}>
                <i
                  className="fa-solid fa-trash"
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => removeFromCart(item.id)}
                ></i>
              </VerProductCard>
            ))
          )}
        </div>
        <aside className="CartSideBar">
          <span className="sub">Subtotal </span>
          <span className="ProdQuant">({cartQuantity} item):</span>
          <span className="TotalPrice">${totalPrice}</span>
          {/* <div className="/"></div> */}
          {cartItems.length > 1 ? (
            <a href="" className="item-cart-btn">
              chechout
            </a>
          ) : (
            <a href="" className="item-cart-btn disabled">
              chechout
            </a>
          )}
        </aside>
      </div>
    </>
  );
};
