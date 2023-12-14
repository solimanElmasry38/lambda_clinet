import "./courseCard.scss";
import img from "../../assets/avatar.jpg";
export const CourseCard = () => {
  return (
    <div className="courseCardContainer">
      <main className="courseCard">
        <h2 className="courseName">react js</h2>
        <p className="courseDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore qui
          beatae assumenda iure eaque deserunt similique omnis dolorem harum
          totam.
        </p>
        <div className="features"></div>
        <a href="!" className="couseCreater">
          <img
            src={img}
            alt=""
            className="createrImg"
            width={"50px"}
            height={"50px"}
          />
          <p className="createrName">soliman elmasry</p>
        </a>
      </main>
      <footer className="courseCardFooter">
        <i className="like">like</i>
        <a href="" className="btn">
          more about
        </a>
      </footer>
    </div>
  );
};
