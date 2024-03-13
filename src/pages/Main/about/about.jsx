import "./about.css";
import img1 from "../../../assets/images/doctor.png";
import { FiCheck } from "react-icons/fi";

const About = () => {
  return (
    <div className="About">
      <div className="col2">
        <div className="title">About Us</div>
        <div className="desc">
          Clinic with <strong style={{ color: "#199de4" }}>innovative</strong>{" "}
          <br />
          approach to treatment
        </div>
        <div className="desc2">
          We provide the a wide range of medical services, so every person could
          have the opportunity to receive qualitative medical help.
        </div>
        <div className="desc3">
          <div className="blocItem1">
            <ul>
              <li>
                {" "}
                <FiCheck /> Adult and Children Trauma Center{" "}
              </li>
              <li>
                <FiCheck /> Birthing and Lactation Classes
              </li>
              <li>
                {" "}
                <FiCheck /> Dental and Oral Surgery
              </li>
              <li>
                <FiCheck /> Heart and Vascular Institute
              </li>
              <li>
                <FiCheck /> Interventional Cardiology
              </li>
            </ul>
          </div>
          <div className="blocItem2">
            <ul>
              <li>
                <FiCheck /> Adult and Children Trauma Center{" "}
              </li>
              <li>
                <FiCheck /> Birthing and Lactation Classes
              </li>
              <li>
                <FiCheck /> Dental and Oral Surgery
              </li>
              <li>
                <FiCheck /> Heart and Vascular Institute
              </li>
              <li>
                <FiCheck /> Interventional Cardiology
              </li>
            </ul>
          </div>
        </div>
        <button className="button">Découvrir</button>
      </div>
      <div className="col1">
        <img src={img1} alt="accueil_image" />
      </div>
    </div>
  );
};

export default About;
