import "react-multi-carousel/lib/styles.css";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./Main.css";
import Bannier from "./bannier/bannier";
import Services from "./services/Services";
import About from "./about/about";
import Imagerie from "./imagerie/imagerie";
import Equipe from "./equipe/equipe";
import Specialite from "./specialite/specialite";
import Service from "./services/service";

const Main = () => {
  return (
    <div className="mainContent">
      <div className="overPlay"></div>
      <Social />
      <Navbar />

      <Bannier />
      <Services />
      <About />
      <Imagerie />
      <Specialite />
      <Service />
      <Equipe />
    </div>
  );
};

export default Main;
