import { Link } from "react-router-dom";
import "./bannier.css";

const Bannier = () => {
  return (
    <div className="acceuil">
      <h2>CENTRE INTERDISCIPLINAIRE EN IMAGERIE MEDICALE</h2>
      <div className="description">
      Notre vision est de créer un pôle d’excellence regroupant les groupes de créativité et les infrastructures permettant de mener un programme de recherche ambitieux avec un impact social et une évolution vers le bien-être durable.
      </div>
      <div className="btns">
        <button className="button">Nous decouvrir</button>
        <button className="button"> <Link to="/sign-up" style={{ textDecoration: "none", color: "white" }}>Inscription</Link></button>

      </div>
    </div>
  );
};

export default Bannier;
