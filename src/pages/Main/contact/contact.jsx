import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from "react-icons/fi";
import "./contact.css"
const Contact = () => {
    return (
        <div className="formMain">
            <div className="imageForm">
                <div className="imageLocation"></div>
                <div className="notreAdresse">
                    <p>Siège social : Bloc technique, Cliniques Universitaires de Kinshasa, UNIKIN</p>
                    <p>Mail : <a href="mailto:recherchepositive@gmail.com">recherchepositive@gmail.com</a></p>
                    <p>Tél. : <a href="tel:+243974997528">+243 97499 75 28</a> // <a href="tel:+243818105568">+243 81 81 055 68</a></p>

                </div>

                <div className="notreSocial">

                    <FiLinkedin size={20} />
                    <FiTwitter size={20} />
                    <FiFacebook size={20} />
                    <FiInstagram size={20} />
                    <FiYoutube size={20} />

                </div>
            </div>
            <div className="signupForm">

                <div className="contactTitle">
                    Nous contactez
                </div>
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Téléphone</label>
                        <input type="phone" className="form-control" id="text" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Adresse mail</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleTextarea" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleTextarea" rows={5}></textarea>
                    </div>



                    <button className="buttonContact">Envoyer</button>
                </form>
            </div>


        </div>
    )
}

export default Contact
