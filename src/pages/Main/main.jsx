import "react-multi-carousel/lib/styles.css";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./Main.css";
import Bannier from "./bannier/bannier";
import Services from "./services/Services";

const Main = () => {
  return (
    <div className="mainContent">
      <div className="overPlay"></div>
      <Social />
      <Navbar />

      <Bannier />
      <Services />

      <div className="mainApp"></div>
    </div>
  );
};

export default Main;
