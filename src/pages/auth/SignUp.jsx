import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";
import { FaCalendarTimes } from "react-icons/fa";
import axios from "axios";
import { baseUrl } from "../../bases/basesurl";
import { toast } from "react-toastify";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [numTel, setNumTel] = useState("");
  const [password, setPassword] = useState("");
  const [sexe, setSexe] = useState("");
  const [dateNaissance, setDateNaissance] = useState("");
  const [clic, setClic] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setClic(true);
    try {
      const { data } = await axios.post(`${baseUrl}/users`, {
        email,
        nom,
        prenom,
        numTel,
        password,
        sexe,
        dateNaissance,
      });
      setClic(false);
      toast.success("Inscription effectuée avec succès");
      if (data) {
        navigate("/sign-in");
      }
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
      <h2 style={{ margin: 0 }}>Inscrivez-vous</h2>
      <span className="mb-3">
        Devenez-membre juste en remplissant ces cases
      </span>

      <form onSubmit={handleSubmit}>
        <div>
          <div className="row">
            <div className="col-sm-6">
              <div className="contentInput">
                <FiUser />
                <input
                  type="text"
                  placeholder="Nom *"
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                />
              </div>
            </div>

            <div className="col-sm-6">
              <div className="contentInput">
                <FiUserCheck />
                <input
                  type="text"
                  placeholder="Prénom *"
                  onChange={(e) => setPrenom(e.target.value)}
                  value={prenom}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="contentInput">
            <FiPhone />
            <input
              type="text"
              placeholder="Votre numéro de téléphone"
              onChange={(e) => setNumTel(e.target.value)}
              value={numTel}
            />
          </div>
          <br />

          <div className="contentInput">
            <FiMail />
            <input
              type="email"
              placeholder="Votre adresse email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <br />

          <div className="contentInput">
            <FiUsers />
            <select
              style={{
                border: 0,
              }}
              onChange={(e) => setSexe(e.target.value)}
            >
              <option value="">--Sexe--</option>
              <option value="M">M</option>
              <option value="F">F</option>
            </select>
          </div>

          <br />

          <div className="contentInput">
            <FaCalendarTimes />
            <input
              type="date"
              onChange={(e) => setDateNaissance(e.target.value)}
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
          disabled={
            email && password && numTel && sexe && nom && prenom
              ? clic
                ? true
                : false
              : true
          }
          style={{
            opacity:
              email && password && numTel && sexe && nom && prenom
                ? clic
                  ? 0.6
                  : 1
                : 0.6,
          }}
        >
          {clic ? "Inscription en cours..." : " S'inscrire"}
        </button>
      </form>

      <div className="contentPassForget">
        <div>
          <span>Avez-vous déjà de compte ? Connectez-vous </span>
          <Link to="/sign-in">ici</Link>
        </div>
      </div>

      <Link to="/" className="mt-2">
        Retour à la page d'accueil
      </Link>
    </div>
  );
};

export default SignUp;
