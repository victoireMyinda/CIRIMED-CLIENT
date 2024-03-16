import "./equipe.css"
import doc1  from "../../../assets/images/doc1.jpg"
import doc2  from "../../../assets/images/doc2.jpg"
import doc3  from "../../../assets/images/doc3.jpg"
import doc4  from "../../../assets/images/doc4.jpg"

const Equipe = () => {
    return (
        <div className="equipeMain">
            <div className="equipeFirstText">
                Notre equipe
            </div>
            <div className="equipeSecondText">
                Nous avons une meilleur equipe de secialiste
            </div>
            <div className="membreDetail">
            <div className="equipePhoto">
                <div className="photoContent">
                    <img src={doc3} alt="c" />

                </div>
                <div className="equipeNom">Docteur Tacite Emmanuel</div>
                <div className="equipeTitle">President</div>

            </div>

            <div className="equipePhoto">
                <div className="photoContent">
                    <img src={doc1} alt="c" />

                </div>
                <div className="equipeNom">Docteur Tacite Emmanuel</div>
                <div className="equipeTitle">Secretaire</div>

            </div>

            <div className="equipePhoto">
                <div className="photoContent">
                    <img src={doc2} alt="c" />

                </div>
                <div className="equipeNom">Docteur Tacite Emmanuel</div>
                <div className="equipeTitle">Secretaire</div>

            </div>

            <div className="equipePhoto">
                <div className="photoContent">
                    <img src={doc4} alt="c" />

                </div>
                <div className="equipeNom">Docteur Tacite Emmanuel</div>
                <div className="equipeTitle">Tresorier</div>

            </div>
            </div>
        </div>
    )
}

export default Equipe
