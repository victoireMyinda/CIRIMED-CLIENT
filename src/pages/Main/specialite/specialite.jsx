import "./specialite.css"
import img1 from "../../../assets/images/doc.png"

const Specialite = () => {
    return (
        <div className="specialite">

            <div className='col1'>
                <img src={img1} alt="accueil_image" />
            </div>

            <div className='col2'>
                <div className='title'>Specialite Us</div>
                <div className='desc'>
                High-class <strong style={{ color: "#199de4", }}>specialists</strong> <br />   are ready to help you at any time.

                  
                </div>
                <div className="desc2">
                Contact us any suitable way and make an appointment with the doctor whose help you need! Visit us at the scheduled time and get your treatment.
                </div>
               
                <button className='button'>Découvrir</button>
            </div>

        </div>
    )
}

export default Specialite
