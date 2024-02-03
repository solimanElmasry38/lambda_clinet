import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import { useState } from "react";
import { _GetProducts } from "../../gql/query/getPoducts.gql";
import { ProductCard } from "../../components/ProductCard/ProductCard";

import { useCart } from "../../context/cartCtx";
import { findItem } from "../../components/Cart/findItems";
import { _GetProduct } from "../../gql/query/getProduct.gql";
import { Cart } from "../../components/Cart/Cart";
import { FindItm } from "../../components/findItems/findIrm";
export type cartProducts = {
  id: string;
  img: string;
  name: string;
  price: number;
  quantity: number;
};
const Home = () => {
  const [images] = useState<string[]>([]);

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
      images.push(el.img);
    });
  }

  const ProductsQuery = useQuery(_GetProducts);

  if (ProductsQuery.loading) {
    return <p>loading</p>;
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
                <button onClick={() => removeFromCart(product.id)}>
                  remove
                </button>
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
            products={cartItems}
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
