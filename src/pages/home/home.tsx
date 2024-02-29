import './home.scss';
import { Carousel } from '../../components/Carousel/Carousel';
import { useQuery } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { _GetProducts } from '../../gql/query/getPoducts.gql';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { useCart } from '../../context/cartCtx';
import { Spinner } from '../../components/Spinner/Spinner';

const Home = () => {
  const images: string[] = [];

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

  const ProductsQuery = useQuery(_GetProducts, {
    variables: {
      input: {}
    }
  });
  if (ProductsQuery.loading) {
    return <Spinner />;
  }

  return (
    <>
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
                    <button className="item-cart-btn" onClick={() => addToCart(product.id,product.price)}>
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
