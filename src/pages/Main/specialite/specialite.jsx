import "./specialite.css";
import Carousel from "react-multi-carousel";
import { useContext } from "react";
import { ContextApp } from "../../../../AppContext";
import { Link } from "react-router-dom";
import { baseUrlFile } from "../../../bases/basesurl";
import { timestampParser } from "../../../../Utils";
import { FiPlus } from "react-icons/fi";

const Specialite = () => {
  const { formations } = useContext(ContextApp);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1260 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1260, min: 800 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="specialite">
      <div className="col2">
        <div className="title">Nos Formations</div>
        <div className="desc">
          <Carousel
            itemAriaLabel="j"
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {formations &&
              formations.length > 0 &&
              formations.map((val) => {
                const url = val && val.url;
                const desc = val && val.desc;
                const title = val && val.title;
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
                  </div>
                );
              })}
          </Carousel>
        </div>

        <button className="buttonShowMore">
          <span>Voir plus</span>
          <FiPlus />
        </button>
      </div>
    </div>
  );
};

export default Specialite;
