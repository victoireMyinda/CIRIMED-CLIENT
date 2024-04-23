import "./about.css";
import img1 from "../../../assets/images/doctor.png";

const About = () => {
  return (
    <div className="About">
      <div className="col2">
        <div className="title">Apropos de nous</div>
        <div className="desc3">
          <div className="blocItem1">
            <p>
              Le Centre Interdisciplinaire de Recherche en Imagerie Médicale <strong>(CIRIMED)</strong> , est un espace de synergies des intelligences entre les différentes disciplines des sciences de l’imagerie médicale, et ce, en liaison étroite avec l’industrie et la communauté.
            </p>
            <p>
              <strong>Le CIRIMED</strong> s’aligne à répondre aux défis de sous-développement en imagerie médicale par une approche interdisciplinaire tout en mettant l’homme au centre des intérêts.
            </p>
            <p>
              <strong>Le CIRIMED</strong> vient à l’appui d’une recherche académique en cours de structuration. Il ambitionne de favoriser la coopération scientifique et les formations, de donner accès aux techniques et méthodes avancées d’imagerie à la communauté scientifique, et de participer au développement économique en impulsant des partenariats industriels. Il est donc le premier centre de recherche et développement (R&D) lié à l’imagerie médicale en RDC.
            </p>
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
