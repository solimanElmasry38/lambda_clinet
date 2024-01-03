
import "./home.scss";
import { Carousel } from "../../components/Carousel/Carousel";
import { useQuery } from "@apollo/client";
import { _GetOffers } from "../../gql/query/getOffers";
import Cookies from "js-cookie";
import {  useState } from "react";
import { _GetProducts } from "../../gql/query/getPoducts.gql";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { div } from "three/examples/jsm/nodes/Nodes.js";


const Home = () => {
  const [images] = useState<string[]>([]);

  const obj = useQuery(_GetOffers, {
    variables: {
      input: {
        usr_id: Cookies.get("lambda_usr_id"),
        usr_token: Cookies.get("lambda_usr_token"),
      },
    },
  });
  // if (loading) {

  // return <p>loading</p>;

  // }

  if (!obj.loading) {
    const arr = obj.data.OFFERS_GET;

    arr.forEach((el: { img: string }) => {
      images.push(el.img);
    });
  }

  const { data, loading } = useQuery(_GetProducts);

  if(loading){
    return <p>loading</p>
  }

    return (
      <>
        <section className="homeSec">
          <div className="slider">
            <Carousel  images={images}/>
          </div>
          <div className="homeContainer">
            {
              console.log("main"+JSON.stringify(data.PRODUCTS_GET))
            }
           {
            // console.log("main "+);
            data.PRODUCTS_GET.map(product=>(
              <div key={product.id}>

                <ProductCard data={product} />
              </div>
            ))
           }
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
  }


// };
export default Home;
