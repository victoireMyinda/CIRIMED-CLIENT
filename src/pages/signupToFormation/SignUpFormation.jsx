import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/header/header";
import Social from "../../components/social/social";
import "./SignUpFormation.css";
import { FiChevronLeft } from "react-icons/fi";
import axios from "axios";
import { baseUrl } from "../../bases/basesurl";
import { ContextApp } from "../../../AppContext";
import { useContext } from "react";
import { toast } from "react-toastify";

const SignUpFormation = () => {
  const { userConnected, getAllFormations } = useContext(ContextApp);
  const param = useParams();
  
  const navigate = useNavigate();

  const handleConfirm = async () => {
    const size = param && param.name && param.name.split("_");
    const id = size[size && size.length - 1];

    try {
      await axios.post(`${baseUrl}/candidats`, {
        userId: userConnected && userConnected.id,
        formationId: id,
      });
      getAllFormations();
      toast.success("Votre inscription a été bien prise en compte");
    } catch (error) {
      console.log(error);
      const err =
        error &&
        error.response &&
        error.response.data &&
        error.response.data.messageError;
      toast.error(err);
    }
  };

  return (
    <>
      <Social other={true} />
      <Navbar other={true} />

      <div className="signupFormation">
        <button className="retour" onClick={() => navigate(-1)}>
          <FiChevronLeft />
          <span>Retour</span>
        </button>

        <div className="content">
          <h5>Confirmez-vous votre inscription à {param && param.name} ?</h5>
          <p>Il suffit de cliquer sur le bouton confirmer</p>

          <button onClick={() => handleConfirm()}>Confirmer</button>
        </div>
      </div>
    </>
  );
};

export default SignUpFormation;
