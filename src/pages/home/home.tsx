import './home.scss';
import { Carousel } from '../../components/Carousel/Carousel';
import { useLazyQuery, useQuery} from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { Spinner } from '../../components/Spinner/Spinner';
import { _GetCategory } from '../../gql/query/getCategory';
import CardsSlider from '../../components/CardsSlider/CardsSlider';
import SubFooter from '../../components/SubFooter/SubFooter';
import { _AddToCartSub } from '../../gql/subscribtion/addToCartSub';
import { _GetCartCount } from '../../gql/query/getCartCount';
import { useEffect } from 'react';

const Home =  ({onCartCountUpdate}) => {
// console.log(onCartCountUpdate())
  const [cartCountFunc] = useLazyQuery(_GetCartCount);
 



  const TechCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'tech'
      }
    }

  });


  const SmartHomeCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'smart home'
      }
    }
  });

  const booksCategQuery = useQuery(_GetCategory, {
    variables: {
      input: {
        Categ_name: 'books'
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
  useEffect(()=>{
    const getCount =async ()=>{
      await cartCountFunc({
        variables: {
          input: {
            usr_id: Cookies.get('lambda_usr_id'),
          }
        }
      }).then(res=>{
        console.log(res.data.GET_CART_COUNT)
        localStorage.setItem("cartCount-query",res.data.GET_CART_COUNT)
      })
    }
    getCount()

  },[cartCountFunc])

  
   
  if (
    TechCategQuery.loading ||
    SmartHomeCategQuery.loading ||
    booksCategQuery.loading ||
    offersQuery.loading 
    
  ) {
    return <Spinner />;
  }

  const images = offersQuery.data?.OFFERS_GET?.map((el) => el.img) || [];
  return (
    <section className="homeSec">
      <div className="slider">
        <h1>


     
        </h1>
        {images.length ? <Carousel images={images} /> : <div className="placeholder"></div>}
      </div>
      <div className="homeContainer">
        {/* Check if data is available before rendering CardsSlider components */}
        {TechCategQuery.data && <CardsSlider Cards={TechCategQuery.data.GET_CATEGORY.product} onCartCountUpdate={onCartCountUpdate} />}
        {SmartHomeCategQuery.data && (
          <CardsSlider Cards={SmartHomeCategQuery.data.GET_CATEGORY.product} onCartCountUpdate={onCartCountUpdate}/>
        )}
        {booksCategQuery.data && <CardsSlider Cards={booksCategQuery.data.GET_CATEGORY.product} onCartCountUpdate={onCartCountUpdate}/>}
        <SubFooter />
      </div>
    </section>
  );
};

export default Home;
