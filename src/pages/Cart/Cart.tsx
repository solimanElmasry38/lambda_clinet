// import { useCart } from '../../context/cartCtx';
// import Cookies from 'js-cookie';
// import VerProductCard from '../../components/VerProductCard/VerProductCard';
// import './Cart.scss';
// import { _GetProduct } from '../../gql/query/getProduct.gql';
// import { useQuery } from '@apollo/client';
// import { _GetCartProducts } from '../../gql/query/getCartProducts';
// import { Spinner } from '../../components/Spinner/Spinner';
// import { useEffect } from 'react';

// export const Cart = () => {
//   const { cartQuantityNum, setcartQuantityNum} = useCart();


// // console.log("in is "+cartQuantityNum)
//   const cartProductsQuery=useQuery(_GetCartProducts,{
//     variables:{
//       input:{
//         usr_id:Cookies.get('lambda_usr_id'),
//       }
//     }
//   })

//   if(cartProductsQuery.loading){
//     return <Spinner/>
//   }

//   const totalCount =cartProductsQuery.data&& cartProductsQuery.data.GET_CART_PRODUCTS.reduce((total, item) => {
//     return total + item.coun_in_cart ;
//   }, 0);
//   useEffect(()=>{

//     setcartQuantityNum(totalCount)
//   },[cartProductsQuery.data])
//   const totalPrice = cartProductsQuery.data&&cartProductsQuery.data.GET_CART_PRODUCTS.reduce((total, item) => {
//     const productPrice = item.price;
//     return total + item.coun_in_cart * productPrice;
//   }, 0);




//   return (
//     <>
//       <div className="cartContainer">
//         <div className="cart">
//           {cartProductsQuery.data&&cartProductsQuery.data.GET_CART_PRODUCTS.length < 1 ? (
//             <p className="empty">cart is emptey</p>
//           ) : (
//             cartProductsQuery.data&&cartProductsQuery.data.GET_CART_PRODUCTS.map((item: { id: string; quantity: number }) => (
//               <VerProductCard item={item} key={item.id + Math.random()} IsCartProduct={true}>
//                 <i
//                   className="fa-solid fa-trash"
//                   style={{ color: 'red', cursor: 'pointer' }}
//                   // onClick={() => removeFromCart(item.id)}
//                 ></i>
//               </VerProductCard>
//             ))
//           )}
//         </div>
//         <aside className="CartSideBar">
//           <span className="sub">Subtotal </span>
//           {/* <span className="ProdQuant">({cartQuantityNum} item):</span> */}
//           <span className="TotalPrice">${totalPrice}</span>
          
//           {cartProductsQuery.data&&cartProductsQuery.data.GET_CART_PRODUCTS.length > 1 ? (
//             <a href="" className="item-cart-btn">
//               chechout
//             </a>
//           ) : (
//             <a href="" className="item-cart-btn disabled">
//               chechout
//             </a>
//           )}
//         </aside>
//       </div>
//     </>
//   );
  
// };
import { useCart } from '../../context/cartCtx';
import Cookies from 'js-cookie';
import VerProductCard from '../../components/VerProductCard/VerProductCard';
import './Cart.scss';
import { useQuery } from '@apollo/client';
import { _GetCartProducts } from '../../gql/query/getCartProducts';
import { Spinner } from '../../components/Spinner/Spinner';
import { useEffect } from 'react';

export const Cart = () => {
  

  const cartProductsQuery = useQuery(_GetCartProducts, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
      },
    },
  });

 
  const loading = cartProductsQuery.loading;

  if (loading) {
    return <Spinner />;
  }

  const totalPrice = cartProductsQuery.data ? cartProductsQuery.data.GET_CART_PRODUCTS.products.reduce((total, item) => {
    const productPrice = item.price;
    return total + item.coun_in_cart * productPrice;
  }, 0) : 0;

  return (
    <div className="cartContainer">
      <div className="cart">
        {cartProductsQuery.data && cartProductsQuery.data.GET_CART_PRODUCTS.products.length < 1 ? (
          <p className="empty">Cart is empty</p>
        ) : (
          cartProductsQuery.data && cartProductsQuery.data.GET_CART_PRODUCTS.products.map((item) => (
            <VerProductCard item={item} key={item.id} IsCartProduct={true}>
              <i className="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }}></i>
            </VerProductCard>
          ))
        )}
      </div>
      <aside className="CartSideBar">
        <span className="sub">Subtotal </span>
        <span>

        {/* {cartQuantityNum} (products) */}
        </span>
        <span className="TotalPrice">${totalPrice}</span>
        {cartProductsQuery.data && cartProductsQuery.data.GET_CART_PRODUCTS.products.length > 1 ? (
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
