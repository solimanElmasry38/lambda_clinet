import { useQuery } from "@apollo/client";
import { _GetProduct } from "../../gql/query/getProduct.gql";
import { cartProducts } from "../../pages/home/home";
import "./Cart.scss";
import { useEffect, useState } from "react";
import { useCart } from "../../context/cartCtx";
interface Iprops {
  isVisable: boolean;
  products;
  removeProduct;
  cartVisablity;
  openCart;
  closeCart;
  cartItems
}

export const Cart = ({
  isVisable,
  products,
  removeProduct,
  cartVisablity,
  openCart,
  closeCart,
}: Iprops) => {
  const { findProds } = useCart();
// useEffect(()=>{
  findProds()
// },[])
  return (
    <>
      <div
        className="cartIcon"
        onClick={() => {
          if (cartVisablity) {
            closeCart();
          } else {
            // findItem("80a2e178-14d9-4941-9c9b-260387339da2")
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
          {products.length < 2 ? (
            <p className="empty">cart is emptey</p>
          ) : (
            products.map((product) => (
              <div
                className="cartProdContainer"
                key={product.id + `${Math.random()}`}
              >
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
                  <i
                    className="fa-solid fa-trash"
                    onClick={removeProduct()}
                  ></i>
                  <p className="total">{product.price * product.quantity}$</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
