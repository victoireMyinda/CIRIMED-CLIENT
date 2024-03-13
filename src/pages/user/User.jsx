import React, { useContext } from "react";
import Social from "../../components/social/social";
import Navbar from "../../components/header/header";
import "./User.css";
import { ContextApp } from "../../../AppContext";

const User = () => {
  const { userConnected } = useContext(ContextApp);
  return (
    <>
      <Social other={true} />
      <Navbar other={true} />

      <div className="userMain">
        <h2>
          Salut {userConnected && userConnected.prenom}{" "}
          {userConnected && userConnected.nom}
        </h2>
      </div>
    </>
  );
};

export default User;
