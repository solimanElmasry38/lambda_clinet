
import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import {  useState } from "react";


const Home = () => {

  const [images] = useState<string[]>([]);

  

  const { data, loading } = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get("lambda_usr_id"),
        usr_token: Cookies.get("lambda_usr_token"),
      },
    },
  });
  // if (loading) {

  // return <GlassOverLay />;



  // }

  if(!loading){
   
    const arr=data.OFFERS_GET;


arr.forEach((el: { img: string; }) => {
  
  images.push(el.img)
});





  }

  return (
    <>
      <section className="homeSec">
        <div className="slider">
          <Carousel images={images} />
        </div>
        <div className="homeContainer">
         
          {/* <GlassOverLay
            children={
              <>
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
                <CourseCard />
              </>
            }
          /> */}
        </div>
      </section>
    </>
  );
};

// };
export default Home;
