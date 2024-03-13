import React, { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import "./style.css"
import { toast } from 'react-toastify';
import { baseUrl } from '../../../bases/bases';
import axios from 'axios';
import Navbar from '../../../components/navbarServiceClient/Navbar';
import Header from '../../../components/header/Header';

const NousContacter = () => {
    const [dataContact, setDataContact] = useState({
        prenom: "",
        message: ""
    })


    const handleChange = (e) => {
        const val = e.target.value
        setDataContact({ ...dataContact, [e.target.name]: val })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (dataContact.prenom === "" || dataContact.message === "") {
            toast.error("Champs obligatoire")
        } else {
            axios.post(`${baseUrl}/signal-abus`, {
                data: dataContact,
                // email: "order@congomart.com"
            })
                .then((res) => {
                    toast.success("Merci de nous ecrire.")
                    setDataContact({
                        prenom: "",
                        message: ""
                    });
                })
                .catch((error) => {
                    toast.error("une erreur s'est produite")
                    console.log(error)
                })
        }

    }

    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>

            <div className="contactMain mt-3">
                <div className="blocTextContact">
                    <h1>CONTACTEZ-NOUS</h1>
                    <p>Nos services sont disponibles 24h/24, 7j/7</p>
                </div>

                <div className="blocContact">
                    <div className="byPhone">
                        <div className="logoContact"></div>
                        <div className="textContact">
                            <h5 style={{ fontWeight: "bold" }}>Par téléphone</h5>
                            <p>Appeler-nous au : +243 892844000 <br />
                                Du lundi au lundi</p>
                        </div>
                    </div>
                    <div className="byPhone">
                        <div className="logoContact"></div>
                        <div className="textContact">
                            <h5 style={{ fontWeight: "bold" }}>Par chat</h5>
                            <p>Posez-nous toutes vos questions en cliquant sur le chat en bas à droite de chaque page</p>
                        </div>
                    </div>
                    <div className="byPhone">
                        <div className="logoContact"></div>
                        <div className="textContact">
                            <h5 style={{ fontWeight: "bold" }}>Par mail</h5>
                            <p>Ecrivez-nous sur l'adresse mail  <br />
                                <a href="#mailto">order@congomart.com</a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="blocTextContact">
                    <h2>Laissez-nous un message</h2>
                    <p>Vous pouvez nous laisser un message directement en renseignant ces champs ci-dessous</p>
                </div>

                <div className="blocFormContact">
                    <form onSubmit={handleSubmit}>
                        <div className="formContactBloc">
                            <div className="mb-3 inputContact">
                                <input type="name" className="form-control"
                                    name='prenom'
                                    placeholder='Votre prenom'
                                    value={dataContact.prenom}
                                    onChange={(e) => handleChange(e)}
                                    style={{ padding: "10px" }}
                                >

                                </input>
                            </div>

                            <div className="row mt-4 inputTextContact" >
                                <div class="form-group mb-3">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
                                        name='message'
                                        placeholder='Laissez-nous un message'
                                        value={dataContact.message}
                                        onChange={(e) => handleChange(e)}>
                                    </textarea>
                                </div>
                            </div>

                            <div className='blocBtnSubmit'> <button>Envoyer</button></div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>


    );
};

export default NousContacter;