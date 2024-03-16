import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Popup from "reactjs-popup";
import { ContextApp } from "../../../AppContext";
import { FcGlobe } from "react-icons/fc";

const Navbar = ({ other }) => {
  const [activeItem, setActiveItem] = useState("Accueil");

  const activeStyle = {};

  const handleClick = (item) => {
    setActiveItem(item);
  };

  const [windowSize, setWindowSize] = useState(window.scrollY);

  useEffect(() => {
    const nav = document.querySelector(".navbarMain");
    function handleRezise() {
      setWindowSize(window.scrollY);
    }

    if (windowSize > 40) {
      nav.classList.add("sticky");

      if (other) {
        nav.classList.add("activeOther");
      }
    } else {
      nav.classList.remove("sticky");
      nav.classList.remove("activeOther");
    }

    window.addEventListener("scroll", handleRezise);

    return () => window.removeEventListener("scroll", handleRezise);
  }, [windowSize, other]);

  const { userConnected, setUserConnected } = useContext(ContextApp);

  function logOut() {
    setUserConnected(null);
    localStorage.removeItem("tokenUser");
  }

  return (
    <div className={other ? "navbarMain active" : "navbarMain"}>
      <div className="imageLogo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul>

      <li
          className={activeItem === "Accueil" ? "active" : ""}
          onClick={() => handleClick("Accueil")}
          style={activeItem === "Accueil" ? activeStyle : {}}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <span>Accueil</span>
            <FiChevronDown />
          </Link>
        </li>

        <li
          className={activeItem === "Posts" ? "active" : ""}
          onClick={() => handleClick("Posts")}
          style={activeItem === "Posts" ? activeStyle : {}}
        >
          <Link to="/posts" style={{ textDecoration: "none" }}>
            <span>Posts</span>
            <FiChevronDown />
          </Link>
        </li>

        <li
          className={activeItem === "Formations et Atelier" ? "active" : ""}
          onClick={() => handleClick("Formations et Atelier")}
          style={activeItem === "Formations et Atelier" ? activeStyle : {}}
        >
          <Link to="/formations" style={{ textDecoration: "none" }}>
            <span>Formations et Atelier</span>
            <FiChevronDown />
          </Link>
        </li>

        <li
          className={activeItem === "Nos videos" ? "active" : ""}
          onClick={() => handleClick("Nos videos")}
          style={activeItem === "Nos videos" ? activeStyle : {}}
        >
          <Popup
            trigger={
              <button
                style={{
                  background: "transparent",
                  border: 0,
                }}
              >
                <Link href="">
                  <span>Médiathèques</span>
                  <FiChevronDown />
                </Link>
              </button>
            }
            position={["bottom right", "bottom right", "bottom right"]}
            closeOnDocumentClick
          >
            <div className="btnsLinks">
              <Link
                to="/videos"
                style={{ padding: "1rem", textAlign: "center" }}
              >
                Vidoés
              </Link>
              <Link
                to="/images"
                style={{ padding: "1rem", textAlign: "center" }}
              >
                Images
              </Link>
            </div>
          </Popup>
        </li>
      </ul>

      <div className="profile-langue">
        <div className="select-langue">
          <FcGlobe />
          <select>
            <option value="En">Anglais</option>
            <option value="Fr">Français</option>
          </select>
        </div>
        <div>
          <Popup
            trigger={
              <button
                style={{
                  background: "transparent",
                  border: 0,
                }}
              >
                {userConnected ? (
                  <div style={{
                    background:"#f3f5f8",
                    border:"1px solid silver",
                    padding:".3rem",
                    borderRadius:"3px"
                  }}>
                    <span>
                      {userConnected && userConnected.prenom}
                    </span>
                  </div>
                ) : (
                  <FaRegUser
                    size={20}
                    style={{ cursor: "pointer" }}
                    color="#fff"
                  />
                )}
              </button>
            }
            position={["bottom right", "bottom right", "bottom right"]}
            closeOnDocumentClick
          >
            <div className="btnsLinks">
              {!userConnected ? (
                <Link
                  to="/sign-in"
                  style={{ padding: "1rem", textAlign: "center" }}
                >
                  Connexion
                </Link>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                    gap: "0.5rem",
                  }}
                >
                  <button style={{ border: 0, background: "transparent" }}>
                    <Link to={`/user/${userConnected && userConnected.prenom}`}>
                      Votre compte
                    </Link>
                  </button>
                  <button
                    style={{ border: 0, background: "transparent" }}
                    onClick={logOut}
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
