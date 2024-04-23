import "./partenaire.css"
import cuk from "../../../assets/images/cuk.png"
import imt from "../../../assets/images/imt.png"
import scr from "../../../assets/images/scr.jpg"

const Partenaire = () => {
    return (
        <div className="partenaireMain">
            <div className="partenaireFirstText">
                Nos Partenaires
            </div>

            <div className="membreDetail">
                <div className="partenairePhoto">
                    <img src={cuk} alt="c" />
                </div>

                <div className="partenairePhoto">
                    <img src={imt} alt="c" />
                </div>

                <div className="partenairePhoto">
                    <img src={scr} alt="c" />
                </div>
                
                <div className="partenairePhoto">
                    <img src={cuk} alt="c" />
                </div>

                <div className="partenairePhoto">
                    <img src={imt} alt="c" />
                </div>

                <div className="partenairePhoto">
                    <img src={scr} alt="c" />
                </div>


            </div>
        </div>
    )
}

export default Partenaire
