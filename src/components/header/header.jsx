import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import "./header.css";

const Navbar = () => {
  // État local pour suivre l'élément actif
  const [activeItem, setActiveItem] = useState("Accueil");

  // Style de l'élément actif
  const activeStyle = {
    color: "blue",
    padding: "5px",
    borderRadius: "5px",
    background: "lightgray",
  };

  // Fonction pour gérer le clic sur un élément
  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='navbarMain'>
      <div className='imageLogo'>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul>
        {/* Accueil */}
        <li className={activeItem === "Accueil" ? "active" : ""} onClick={() => handleClick("Accueil")} style={activeItem === "Accueil" ? activeStyle : {}}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Accueil
          </Link>
        </li>

        {/* Posts */}
        <li className={activeItem === "Posts" ? "active" : ""} onClick={() => handleClick("Posts")} style={activeItem === "Posts" ? activeStyle : {}}>
          <Link to="/posts" style={{ textDecoration: "none" }}>
            Posts
          </Link>
        </li>

        {/* Formations et Atelier */}
        <li className={activeItem === "Formations et Atelier" ? "active" : ""} onClick={() => handleClick("Formations et Atelier")} style={activeItem === "Formations et Atelier" ? activeStyle : {}}>
          <Link to="/formations" style={{ textDecoration: "none" }}>
            Formations et Atelier
          </Link>
        </li>

        <li className={activeItem === "Images" ? "active" : ""} onClick={() => handleClick("Images")} style={activeItem === "Images" ? activeStyle : {}}>
          <Link to="/formations" style={{ textDecoration: "none" }}>
            Images
          </Link>
        </li>

        <li className={activeItem === "Nos videos" ? "active" : ""} onClick={() => handleClick("Nos videos")} style={activeItem === "Nos videos" ? activeStyle : {}}>
          <Link to="/formations" style={{ textDecoration: "none" }}>
            Nos videos
          </Link>
        </li>

        <li className={activeItem === "Nous contacter" ? "active" : ""} onClick={() => handleClick("Nous contacter")} style={activeItem === "Nous contacter" ? activeStyle : {}}>
          <Link to="/formations" style={{ textDecoration: "none" }}>
            Nous contacter
          </Link>
        </li>

        <li className={activeItem === "Devenir membre" ? "active" : ""} onClick={() => handleClick("Devenir membre")} style={activeItem === "Devenir membre" ? activeStyle : {}}>
          <Link to="/formations" style={{ textDecoration: "none" }}>
            Devenir membre
          </Link>
        </li>

      </ul>

      <div className="profile-langue">
        <div>
          <select>
            <option value="" key="">Anglais</option>
            <option value="" key="">Français</option>
          </select>
        </div>

        <div>
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
