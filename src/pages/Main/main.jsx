import "react-multi-carousel/lib/styles.css";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./Main.css";
import Bannier from "./bannier/bannier";
import About from "./about/about";
import Mission from "./mission/mission";
import Equipe from "./equipe/equipe";
import Formations from "./quelquesformations/quelquesformatins";
import NosValuers from "./valeur/valeur";
import Partenaire from "./partenaire/partenaire";
import Contact from "./contact/contact";
import Footer from "../../components/footer/footer";
// import { useEffect } from "react";

const Main = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="mainContent">
      <div className="overPlay"></div>
      <Social />
      <Navbar />

      <Bannier />
      <About />
      <Mission />
      <Formations />
      <NosValuers />
      <Equipe />
      <Contact />
      <Partenaire />
      <Footer />
    </div>
  );
};

export default Main;
