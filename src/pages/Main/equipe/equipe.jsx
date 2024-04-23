import Carousel from "react-multi-carousel";
import "./equipe.css"
import doc1 from "../../../assets/images/doc1.jpg"
import doc2 from "../../../assets/images/doc2.jpg"
import doc3 from "../../../assets/images/doc3.jpg"
import doc4 from "../../../assets/images/doc4.jpg"


const Equipe = () => {
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
        <div className="equipeMain">
            <div className="equipeFirstText">
                Equipe
            </div>

            <div >

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

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc3} alt="c" />

                        </div>
                        <div className="equipeNom">Pr Antoine Molua Aundu</div>
                        <div className="equipeNom"> Président du Conseil Scientifique</div>
                        <div className="equipeTitle"> <a href="tel:+243818105568">(+243) 81 81 05 568</a></div>
                        <div className="equipeTitle"><a href="mailto:">aamolua@yahoo.fr</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc1} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Tacite Mazoba Kpanya</div>
                        <div className="equipeNom">Secrétaire Permanent</div>
                        <div className="equipeTitle"> <a href="tel:+243821337095">(+243) 82 133 70 95</a></div>
                        <div className="equipeTitle"><a href="mailto:">tacitemazoba@unikin.ac.cd</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc1} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Charlène Malamba Mila</div>
                        <div className="equipeNom">Secrétaire Permanent Adjointe t</div>
                        <div className="equipeTitle"> <a href="tel:+243972792480">(+243)  972 792 480</a></div>
                        <div className="equipeTitle"><a href="mailto:">feliciabamps21@gmail.com</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc2} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Lily Kuzoma Mwimba</div>
                        <div className="equipeNom"> Trésorière</div>
                        <div className="equipeTitle"> <a href="tel:+243819277047">(+243) 81 927 70 47</a></div>
                        <div className="equipeTitle"><a href="mailto:">lilykuzoma@gmail.com</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc4} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Laurène Muleka Bilonda</div>
                        <div className="equipeNom">Trésorière Adjointe</div>
                        <div className="equipeTitle"> <a href="tel:+243819761969">(+243) 81 976 19 69</a></div>
                        <div className="equipeTitle"><a href="mailto:">curtismuleka@gmail.com</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc4} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Bomane Diallo Isombeko</div>
                        <div className="equipeNom">Coord. en charge des relations publiques</div>
                        <div className="equipeTitle"> <a href="tel:+243820516682">(+243) 82 051 66 82</a></div>
                        <div className="equipeTitle"><a href="mailto:">bomane1991@gmail.com</a></div>

                    </div>

                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc4} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Patrick Anelia Lusilao</div>
                        <div className="equipeNom">Coord. en charge des ressources extérieures</div>
                        <div className="equipeTitle"> <a href="tel:+243892566108">(+243) 89 256 61 08</a></div>
                        <div className="equipeTitle"><a href="mailto:">p.lusilao1990@gmail.com</a></div>

                    </div>


                    <div className="equipePhoto">
                        <div className="photoContent">
                            <img src={doc4} alt="c" />

                        </div>
                        <div className="equipeNom">Dr Ruben Siko Kola</div>
                        <div className="equipeNom">Coord. en charge de la logistique</div>
                        <div className="equipeTitle"> <a href="tel:+243818820748">(+243) 81 882 07 48</a></div>
                        <div className="equipeTitle"><a href="mailto:">rubensikola@gmail.com</a></div>

                    </div>

                </Carousel>
            </div>
        </div>
    )
}

export default Equipe
