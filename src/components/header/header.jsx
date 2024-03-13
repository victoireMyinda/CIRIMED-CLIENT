import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.css";
import { FiChevronDown } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import Popup from "reactjs-popup";
import { ContextApp } from "../../../AppContext";

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
      if (!other) {
        nav.classList.add("sticky");
      } else {
        nav.classList.add("stickyActive");
      }
    } else {
      nav.classList.remove("sticky");
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
          className={activeItem === "Images" ? "active" : ""}
          onClick={() => handleClick("Images")}
          style={activeItem === "Images" ? activeStyle : {}}
        >
          <Link to="/formations" style={{ textDecoration: "none" }}>
            <span>Images</span>
            <FiChevronDown />
          </Link>
        </li>

        <li
          className={activeItem === "Nos videos" ? "active" : ""}
          onClick={() => handleClick("Nos videos")}
          style={activeItem === "Nos videos" ? activeStyle : {}}
        >
          <Link to="/formations" style={{ textDecoration: "none" }}>
            <span>Nos videos</span>
            <FiChevronDown />
          </Link>
        </li>
        {!userConnected && (
          <li
            className={activeItem === "Devenir membre" ? "active" : ""}
            onClick={() => handleClick("Devenir membre")}
            style={activeItem === "Devenir membre" ? activeStyle : {}}
          >
            <Link to="/sign-up" style={{ textDecoration: "none" }}>
              Devenir membre
            </Link>
          </li>
        )}
      </ul>

      <div className="profile-langue">
        <div className="select-langue">
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
                  <span style={{ color: other ? "#222" : "#fff" }}>
                    {userConnected && userConnected.prenom}
                  </span>
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
