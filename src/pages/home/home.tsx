import { CourseCard } from "../../components/CourseCard/courseCard";
import { GlassOverLay } from "../../components/GlassOverLay/overLay";
import { isLoadingContx } from "../../context/isLoading";
import { useContext, useEffect } from "react";
import "./home.scss";
import { Spinner } from "../../components/spinner/spinner";

export const Home = () => {

  // const {isLoading}=useContext(isLoadingContx)
  // console.log(isLoading)

  // useEffect(()=> {
  //   else{
  //    lod=false

  //   }
  // }, [isLoading]);


  // if(isLoading){
  //   console.log('"in fuc"')
  //   setTimeout(() => {
      
  //   }, 3000);
  //     return <Spinner/>;
 
  //  }else{

      
        // console.log(isLoading)
      
        return (
          <>
            <section className="homeSec">
              <div className="slider"></div>
              <div className="homeContainer">
                <GlassOverLay
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
                />
              </div>
            </section>
          </>
        );
   }



// };
