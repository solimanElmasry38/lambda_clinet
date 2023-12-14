import { CourseCard } from "../../components/CourseCard/courseCard";
import { GlassOverLay } from "../../components/GlassOverLay/overLay";
import "./home.scss";
export const Home = () => {
  return (
    <>
      <section className="homeSec">
        <div className="homeContainer">
          <GlassOverLay />
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
        </div>
      </section>
    </>
  );
};
