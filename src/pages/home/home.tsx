// import './home.scss';
// import { Carousel } from '../../components/Carousel/Carousel';
// import { useQuery } from '@apollo/client';
// import { _GetOffers } from '../../gql/query/getOffers';
// import Cookies from 'js-cookie';
// import { _GetProducts } from '../../gql/query/getPoducts.gql';
// import { ProductCard } from '../../components/ProductCard/ProductCard';
// import { useCart } from '../../context/cartCtx';
// import { Spinner } from '../../components/Spinner/Spinner';
// import { _GetCategory } from '../../gql/query/getCategory';
// import CardsSlider from '../../components/CardsSlider/CardsSlider';

// const Home = () => {
//   const images: string[] = [];

//   const { addToCart } = useCart();

//   const catQuery = useQuery(_GetCategory, {
//     variables: {
//       input: {
//         Categ_name: 'tech',
//         usr_id: Cookies.get('lambda_usr_id'),
//         usr_token: Cookies.get('lambda_usr_token')
//       }
//     }
//   }); 
//   if (catQuery.loading) {
//     return <Spinner />;
//   }

//   if (catQuery.error) {
//     console.log(catQuery.error);
//   }

//   const offersQuery = useQuery(_GetOffers, {
//     variables: {
//       input: {
//         usr_id: Cookies.get('lambda_usr_id'),
//         usr_token: Cookies.get('lambda_usr_token')
//       }
//     }
//   });
//   if (!offersQuery.loading) {
//     const arr = offersQuery.data.OFFERS_GET;
//     arr.forEach((el: { img: string }) => {
//       images.push(el.img);
//     });
//   }

//   // const ProductsQuery = useQuery(_GetProducts, {
//   //   variables: {
//   //     input: {}
//   //   }
//   // });
//   // if (ProductsQuery.loading) {
//   //   return <Spinner />;
//   // }

//   return (
//     <>
//       <section className="homeSec">
//         <div className="slider">
//           <Carousel images={images} />
//         </div>
//         <div className="homeContainer">
//           {/* {ProductsQuery.data &&
//             ProductsQuery.data.PRODUCTS_GET.map((product) => (
//               <div key={product.id}>
//                 <ProductCard data={product}>
//                   {product.is_available ? (
//                     <button className="item-cart-btn" onClick={() => addToCart(product.id,product.price)}>
//                       Add To Cart
//                     </button>
//                   ) : (
//                     <p>notAvaliable</p>
//                   )}
//                 </ProductCard>
//               </div>
//             ))} */}
//          <CardsSlider Cards={catQuery.data.GET_CATEGORY.product}/>
//         </div>
//       </section>
//     </>
//   );
// };


// export default Home;

import './home.scss';
import { Carousel } from '../../components/Carousel/Carousel';
import { useQuery } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { _GetProducts } from '../../gql/query/getPoducts.gql';

import { Spinner } from '../../components/Spinner/Spinner';
import { _GetCategory } from '../../gql/query/getCategory';
import CardsSlider from '../../components/CardsSlider/CardsSlider';

const Home = () => {

  const catQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'tech',
        usr_id: Cookies.get('lambda_usr_id'),
        usr_token: Cookies.get('lambda_usr_token')
      }
    }
  }); 

  const offersQuery = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get('lambda_usr_id'),
        usr_token: Cookies.get('lambda_usr_token')
      }
    }
  });

  if (catQuery.loading || offersQuery.loading) {
    return <Spinner />;
  }

  if (catQuery.error) {
    console.log(catQuery.error);
  }

  const images = offersQuery.data.OFFERS_GET.map((el) => el.img);

  // const ProductsQuery = useQuery(_GetProducts, {
  //   variables: {
  //     input: {}
  //   }
  // });
  // if (ProductsQuery.loading) {
  //   return <Spinner />;
  // }

  return (
    <>
      <section className="homeSec">
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
          {/* {ProductsQuery.data &&
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
            ))} */}
         <CardsSlider Cards={catQuery.data.GET_CATEGORY.product}/>
        </div>
      </section>
    </>
  );
};


export default Home;
