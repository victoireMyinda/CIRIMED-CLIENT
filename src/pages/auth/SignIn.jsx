import React, { useContext, useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { FiLock, FiMail } from "react-icons/fi";
import axios from "axios";
import { baseUrl } from "../../bases/basesurl";
import { toast } from "react-toastify";
import { ContextApp } from "../../../AppContext";

const SignIn = () => {
  const [val, setVal] = useState("");
  const [password, setPassword] = useState("");
  const [clic, setClic] = useState(false);

  const { setIsConnected } = useContext(ContextApp);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClic(true);
    try {
      const { data } = await axios.post(`${baseUrl}/users/authentification`, {
        val: val,
        password: password,
      });
      localStorage.setItem("tokenUser", JSON.stringify(data));
      setClic(false);
      toast.success("Connexion effectuée avec succès");
      setIsConnected(true);
      navigate("/");
    } catch (error) {
      console.log(error);
      const erreur =
        error &&
        error.response &&
        error.response.data &&
        error.response.data.messageError;
      toast.error(erreur);
      setClic(false);
    }
  };

  return (
    <div className="auth">
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="contentInput">
            <FiMail />
            <input
              type="text"
              placeholder="Adresse email / Numéro tél."
              onChange={(e) => setVal(e.target.value)}
              value={val}
            />
          </div>
          <br />

          <div className="contentInput">
            <FiLock />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Votre adresse mot de passe"
            />
          </div>
        </div>

        <button
          disabled={val && password ? (clic ? true : false) : true}
          style={{
            opacity: val && password ? (clic ? 0.6 : 1) : 0.6,
          }}
        >
          {clic ? "Connexion en cours..." : "Se conneter"}
        </button>
      </form>

      <div className="contentPassForget">
        <div>
          <span>Vous n'avez pas de compte ? Créer </span>
          <Link to="/sign-up">ici</Link>
        </div>

        <button>Mot de passe oublié ?</button>
      </div>

      <Link to="/" className="mt-2">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default SignIn;
