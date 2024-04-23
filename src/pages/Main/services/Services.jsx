import "./Services.css";
import { FaHospital, FaHospitalAlt, FaUserMd } from "react-icons/fa";

const Services = () => {
  return (
    <div className="Services">
      <div className="servicesContent">
       
        <div className="content">
        
          <FaUserMd />
          <h5>Cabinet médical privé</h5>
          <div className="desc">
            Le docteur est son propre patron et gère son cabinet de manière
            indépendante. Il peut choisir ses horaires de travail et ses
            patients. La relation avec les patients est souvent plus
            personnalisée. Les frais peuvent être plus élevés que dans d'autres
            structures.
          </div>
        </div>

        <div className="content">
          <FaHospital />
          <h5>Clinique</h5>
          <div className="desc">
            Le docteur est son propre patron et gère son cabinet de manière
            indépendante. Il peut choisir ses horaires de travail et ses
            patients. La relation avec les patients est souvent plus
            personnalisée. Les frais peuvent être plus élevés que dans d'autres
            structures.
          </div>
        </div>

        <div className="content">
          <FaHospitalAlt />
          <h5>Recherche médicale</h5>
          <div className="desc">
            Le docteur est son propre patron et gère son cabinet de manière
            indépendante. Il peut choisir ses horaires de travail et ses
            patients. La relation avec les patients est souvent plus
            personnalisée. Les frais peuvent être plus élevés que dans d'autres
            structures.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
