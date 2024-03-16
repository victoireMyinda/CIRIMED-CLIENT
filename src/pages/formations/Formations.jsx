import { useContext, useEffect } from "react";
import { ContextApp } from "../../../AppContext";
import { timestampParser } from "../../../Utils";
import Navbar from "../../components/header/header";
import Social from "../../components/social/social";
import "./Formations.css";
import { useNavigate } from "react-router-dom";
import { baseUrlFile } from "../../bases/basesurl";
import { BiSolidGraduation } from "react-icons/bi";
const Formations = () => {
  const { formations, userConnected } = useContext(ContextApp);
  const navigate = useNavigate();

  const redirectHandle = (data) => {
    const name = data && data.title;
    const id = data && data.id;
    if (userConnected) navigate(`/sign-up/${name}_${id}`);
    else navigate(`/sign-in`);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Social other={true} />
      <Navbar other={true} />

      <div className="formationsContainer">
        <div className="head">
          <span className="title">Toutes nos formations</span>{" "}
          <BiSolidGraduation size={30} />
        </div>
        <div className="formationsGrille">
          {formations &&
            formations.length > 0 &&
            formations.map((val) => {
              const url = val && val.url;
              const desc = val && val.desc;
              const title = val && val.title;
              console.log(val);
              const candidats = val && val.users;
              return (
                <div className="card" key={val && val.id}>
                  <div className="contentImage">
                    <div className="overPlay"></div>
                    <div className="prix">{val && val.prix} USD</div>
                    <img src={baseUrlFile + "/" + url} alt={title} />
                  </div>
                  <h6>
                    {title && title.length > 100
                      ? title &&
                        title.length > 100 &&
                        title.substring(0, 100) + "..."
                      : title}
                  </h6>
                  <div className="desc">
                    {desc && desc.length > 100
                      ? desc &&
                        desc.length > 100 &&
                        desc.substring(0, 100) + "..."
                      : desc}
                  </div>

                  <div className="contentBtnMore">
                    <span className="date">
                      Début: {timestampParser(val && val.dateDebut)}
                    </span>

                    <span className="date">
                      Fin: {timestampParser(val && val.dateFin)}
                    </span>
                  </div>

                  <div className="containerBtnInscrire">
                    <button
                      className="btnInscrire"
                      onClick={() => redirectHandle(val)}
                    >
                      M'inscrire à cette formation
                    </button>
                  </div>
                  {candidats && candidats.length > 0 && (
                    <div className="div">
                      {candidats && candidats.length} inscrits déjà
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Formations;
