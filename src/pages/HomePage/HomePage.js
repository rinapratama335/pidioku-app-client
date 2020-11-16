import { Link } from "react-router-dom";
import ListCategory from "../../components/listCategory/ListCategory";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import RecomendedCourse from "../recomendedCourse/RecomendedCourse";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="container main-page">
        <Slider />
        <ListCategory />
        <RecomendedCourse />
      </div>
    </div>
  );
};

export default HomePage;
