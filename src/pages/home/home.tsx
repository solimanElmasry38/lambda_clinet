import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import { Key, useState } from "react";
import { _GetProducts } from "../../gql/query/getPoducts.gql";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { Cart } from "../../components/Cart/Cart";
export type Ts = {
  id: string;
  img: string;

  name: string;
  price: number;
};
const Home = () => {
  const [images] = useState<string[]>([]);
  const [isVisable, setIsVisable] = useState(false);
  const [products, setProducts] = useState<Ts[]>([
    {
      id: "",
      img: "",

      name: "",
      price: 0,
    },
  ]);
  
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
  const onProductRemove = () => {};
  const onQuantityChange = () => {};
  const btn = <button className="item-cart-btn">Add To Cart</button>;
  return (
    <>
      <section className="homeSec">
        <div
          className="cartIcon"
          onClick={() =>{
            
            setIsVisable((current) => !current)
            setProducts([
              {
                id: "ed9025a9-e524-4d2c-9814-95b9d5f98461",
                img: "https://res.cloudinary.com/ddrulpeh5/image/upload/v1704238591/caerh26nepglh8nentd8.jpg",
                name: "air pods max",
                price: 550,
              },
              {
                id: "9f4959c5-5043-48d0-b9a1-e7f54ce87416",
                img: "https://res.cloudinary.com/ddrulpeh5/image/upload/v1704238591/ivn5cvmqcvi9o4z8jl5o.jpg",
                name: "ipad pro",
                price: 1000,
              },
            ]);
          }}
        >
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
          {data.PRODUCTS_GET.map((product: { id: Key | null | undefined }) => (
            <div key={product.id}>
              <ProductCard data={product} btn={btn} />
            </div>
          ))}
          <Cart
            isVisable={isVisable}
            products={products}
            onProductRemove={onProductRemove}
            onQuantityChange={onQuantityChange}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
