import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import { useEffect, useRef, useState } from "react";
import { _GetProducts } from "../../gql/query/getPoducts.gql";
import { ProductCard } from "../../components/ProductCard/ProductCard";

import { useCart } from "../../context/cartCtx";

import { _GetProduct } from "../../gql/query/getProduct.gql";
import { Cart } from "../../components/Cart/Cart";
import { Spinner } from "../../components/Spinner/Spinner";

export type cartProducts = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
};
const Home = () => {
  // const [images] = useState<string[]>([]);
  const images:string[]=[]

  const {
    addToCart,
    removeFromCart,
    cartVisablity,
    openCart,
    closeCart,
    cartItems,
  
  } = useCart();


  
    const offersQuery = useQuery(_GetOffers, {
      variables: {
        input: {
          usr_id: Cookies.get("lambda_usr_id"),
          usr_token: Cookies.get("lambda_usr_token"),
        },
      },
    });
    if (!offersQuery.loading) {
      const arr = offersQuery.data.OFFERS_GET;
      arr.forEach((el: { img: string }) => {
        images.push(el.img)
      });
    }
  
  // else{
  //   return <Spinner/>
  // }

  const ProductsQuery = useQuery(_GetProducts);

  if (ProductsQuery.loading) {
    return <Spinner/>;
  }

  return (
    <>
      <section className="homeSec">
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
          {ProductsQuery.data.PRODUCTS_GET.map((product) => (
            <div key={product.id}>
              <ProductCard data={product}>
               
                {product.is_available ? (
                  <button
                    className="item-cart-btn"
                    onClick={() => addToCart(product.id)}
                  >
                    Add To Cart
                  </button>
                ) : (
                  <p>notAvaliable</p>
                )}
              </ProductCard>
            </div>
          ))}
          <Cart
            isVisable={cartVisablity}
            cartVisablity={cartVisablity}
            openCart={openCart}
            closeCart={closeCart}
        
            removeProduct={removeFromCart}
            cartItems={cartItems}
          />
          {/* <FindItm /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
