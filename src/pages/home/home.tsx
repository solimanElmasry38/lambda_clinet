import './home.scss';
import { Carousel } from '../../components/Carousel/Carousel';
import { useLazyQuery, useQuery } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/cartCtx';
import { Spinner } from '../../components/Spinner/Spinner';
import { SubHeader } from '../../components/SubHeader/SubHeader';
import { useEffect } from 'react';

const Home = () => {
  const images: string[] = [];

  // const queryRef = useRef("");
  // const categoryRef = useRef("");

  // const onInputChange = (val) => {
  //   queryRef.current = val;
  // };
  // const onCategoryChange = (val) => {
  //   categoryRef.current = val;
  //   console.log(categoryRef.current);
  // };
  const { addToCart } = useCart();

  const offersQuery = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
        usr_token: Cookies.get('lambda_usr_token')
      }
    }
  });
  if (!offersQuery.loading) {
    const arr = offersQuery.data.OFFERS_GET;
    arr.forEach((el: { img: string }) => {
      images.push(el.img);
    });
  }

  const [ProductsQueryFunc, ProductsQuery] = useLazyQuery(_GetProducts);
  useEffect(() => {
    ProductsQueryFunc({
      variables: {
        input: {}
      }
    });
  },[]);
  if (ProductsQuery.loading) {
    return <Spinner />;
  }
  // if(ProductsQuery.data){

  // }
  if (ProductsQuery.error) {
    throw ProductsQuery.error;
  }
  return (
    <>
      {/* <SubHeader onChangeFunc={setQuery} query={query}/> */}
      <SubHeader
        // queryRef={queryRef}
        // categoryRef={categoryRef}
        // onInputChange={onInputChange}
        // onCategoryChange={onCategoryChange}
        ProductsQueryFunc={ProductsQueryFunc}
      />

      <section className="homeSec">
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
          {ProductsQuery.data &&
            ProductsQuery.data.PRODUCTS_GET.map((product) => (
              <div key={product.id}>
                <ProductCard data={product}>
                  {product.is_available ? (
                    <button className="item-cart-btn" onClick={() => addToCart(product.id)}>
                      Add To Cart
                    </button>
                  ) : (
                    <p>notAvaliable</p>
                  )}
                </ProductCard>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Home;
