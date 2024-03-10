import './home.scss';
import { Carousel } from '../../components/Carousel/Carousel';
import { useQuery, useSubscription } from '@apollo/client';
import { _GetOffers } from '../../gql/query/getOffers';
import Cookies from 'js-cookie';
import { Spinner } from '../../components/Spinner/Spinner';
import { _GetCategory } from '../../gql/query/getCategory';
import CardsSlider from '../../components/CardsSlider/CardsSlider';
import SubFooter from '../../components/SubFooter/SubFooter';
import { _AddToCartSub } from '../../gql/subscribtion/addToCartSub';

const Home = () => {
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
        Categ_name: 'smartHome'
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

  // useEffect(() => {
  //   if (TechCategQuery.loading || SmartHomeCategQuery.loading || booksCategQuery.loading || offersQuery.loading) {
  //     loading(); // Call loading function to set loading state to true
  //   }
  // }, [TechCategQuery.loading, SmartHomeCategQuery.loading, booksCategQuery.loading, offersQuery.loading]);

  // Conditionally render Spinner if any of the queries are still loading
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
        {TechCategQuery.data && <CardsSlider Cards={TechCategQuery.data.GET_CATEGORY.product} />}
        {SmartHomeCategQuery.data && (
          <CardsSlider Cards={SmartHomeCategQuery.data.GET_CATEGORY.product} />
        )}
        {booksCategQuery.data && <CardsSlider Cards={booksCategQuery.data.GET_CATEGORY.product} />}
        <SubFooter />
      </div>
    </section>
  );
};

export default Home;
