import { Link } from "react-router-dom";
import "./bannier.css";

const Bannier = () => {
  return (
    <div className="acceuil">
      <h2>Notre expertise pour votre santé</h2>
      <div className="description">
        Le médecin est la personne qui examine ton corps, qui te soigne quand tu
        es malade et te donne des conseils pour rester en bonne santé. Si cela
        est nécessaire, il te prescrit des médicaments, des examens
        complémentaires (prise de sang, radio…) ou un traitement (séances de
        kinésithérapie…).
      </div>
      <div className="btns">
        <button className="button">Découvrir</button>
        <button className="button"> <Link to="/sign-up" style={{textDecoration:"none", color:"white"}}>Devenir Membre</Link></button>

      </div>
    </div>
  );
};

export default Bannier;
