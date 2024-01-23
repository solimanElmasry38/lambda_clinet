import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import { useState } from "react";
import { _GetProducts } from "../../gql/query/getPoducts.gql";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Cart } from "../../components/Cart/Cart";
import { useCart } from "../../context/cartCtx";
export type cartProducts = {
  id: string;
  // img: string;
  // name: string;
  // price: number;
  quantity: number;
};
const Home = () => {
  const [images] = useState<string[]>([]);

  const [products, setProducts] = useState<cartProducts[]>(
    [] as cartProducts[]
  );

  const { addToCart, removeFromCart, cartVisablity, openCart, closeCart,cartItems } =
    useCart();
    
  const obj = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get("lambda_usr_id"),
        usr_token: Cookies.get("lambda_usr_token"),
      },
    },
  });

  if (!obj.loading) {
    const arr = obj.data.OFFERS_GET;

    arr.forEach((el: { img: string }) => {
      images.push(el.img);
    });
  }

  const { data, loading } = useQuery(_GetProducts);

  if (loading) {
    return <p>loading</p>;
  }

  return (
    <>
      <section className="homeSec">
        <div
          className="cartIcon"
          onClick={() => {
            if(cartVisablity){
              closeCart()
            }else{
              setProducts(cartItems);
              openCart() ;
            }
             
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
          {data.PRODUCTS_GET.map((product) => (
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
          <Cart isVisable={cartVisablity} products={products} removeProduct={removeFromCart}/>
        </div>
      </section>
    </>
  );
};

export default Home;
