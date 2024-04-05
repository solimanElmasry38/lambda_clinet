
import Cookies from 'js-cookie';
import VerProductCard from '../../components/VerProductCard/VerProductCard';
import './Cart.scss';
import { useQuery } from '@apollo/client';
import { _GetCartProducts } from '../../gql/query/getCartProducts';
import { Spinner } from '../../components/Spinner/Spinner';
import { useCartQuantity } from '../../context/cartQuantity';


export const Cart = () => {
  const {cartQuantity} = useCartQuantity()
console.log(cartQuantity)
  const cartProductsQuery = useQuery(_GetCartProducts, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
      },
    },
  });

 
  const loading = cartProductsQuery.loading;

  if (loading) {
    console.log("Loadingsss")
    return <Spinner />;
  }else{
    console.log(cartProductsQuery.data.CART_PRODUCTS_GET)
  }
  if(cartProductsQuery.error){
    throw cartProductsQuery.error;
    // return (
    //   <div className="cartContainer">

    //     <div className="cart">

    //     <p className="empty">{cartProductsQuery.error.message}</p>
    //     </div>
    //   </div>
    // )
   
  }

  const totalPrice = cartProductsQuery.data ? cartProductsQuery.data.CART_PRODUCTS_GET.products.reduce((total, item) => {
    const productPrice = item.price;
    return total + item.coun_in_cart * productPrice;
  }, 0) : 0;

  return (
    <div className="cartContainer">
      <div className="cart">
        {cartProductsQuery.data && cartProductsQuery.data.CART_PRODUCTS_GET.products.length < 1 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cartProductsQuery.data && cartProductsQuery.data.CART_PRODUCTS_GET.products.map((item) => (
            <VerProductCard item={item} key={item.id} IsCartProduct={true}>
              <i className="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
            </VerProductCard>
          ))
        )}
      </div>
      <aside className="CartSideBar">
        <span className="sub">Subtotal </span>
        <span>

        </span>
        <span className="TotalPrice">{cartProductsQuery.data && cartProductsQuery.data.CART_PRODUCTS_GET.TotalProductInCart} products ${totalPrice}</span>
        {cartProductsQuery.data && cartProductsQuery.data.CART_PRODUCTS_GET.products.length > 1 ? (
          <a href="/checkout" className="item-cart-btn">
            Checkout
          </a>
        ) : (
          <span className="item-cart-btn disabled">Checkout</span>
        )}
      </aside>
    </div>
  );
};
