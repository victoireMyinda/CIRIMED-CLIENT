import React, { useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import "./Compte.css"
import { useContext } from 'react';
import { ContextApp } from '../../../AppContext';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Compte = () => {

    const { userConnected } = useContext(ContextApp);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    
    useEffect(() => {
        const title = document.querySelector("html head title");
        title.innerHTML = "Compte utilisateur";
    }, []);

    const [windowSize, setWindowSize] = useState(
        window.innerWidth
    );

    const [reduceLength, setReduceLength] = useState(false)

    useEffect(() => {

        function handleRezise() {
            setWindowSize(window.innerWidth)
        }
        if (windowSize > 413) {
            setReduceLength(false);
        }
        if (windowSize <= 413) {
            setReduceLength(true);
        }

        window.addEventListener('resize', handleRezise);

        return () => window.removeEventListener('resize', handleRezise)

    }, [windowSize]);

    return (
        <>
            <Header />
            <div className='compteAndSecurity'>
                <div className='toolBar'>
                    <Link to="/user/profile">Votre compte</Link>
                    <FaAngleRight />
                    <span>Connexion et sécurité</span>
                </div>

                <span className='title'>Connexion et Sécurité</span>

                <div className='contentMain'>
                    <div className='card'>
                        <div className='content'>
                            <div className='desc'>
                                <span>Nom : </span>
                                <span>
                                    {
                                        userConnected && userConnected.nom && userConnected.nom.length > 20 ?
                                            userConnected && userConnected.nom && userConnected.nom.substring(0, 20) + "..."
                                            : userConnected && userConnected.nom
                                    }
                                </span>
                            </div>
                            <Link to={`/user/profile/changer:${userConnected && userConnected.nom}+nom`}>
                                <button className='btn'>Modifier</button>
                            </Link>
                        </div>

                        <div className='content'>
                            <div className='desc'>
                                <span>Pseudo : </span>
                                <span>
                                    {
                                        userConnected && userConnected.pseudo && userConnected.pseudo.length > 20 ?
                                            userConnected && userConnected.pseudo && userConnected.pseudo.substring(0, 20) + "..."
                                            : userConnected && userConnected.pseudo
                                    }
                                </span>
                            </div>
                            <Link to={`/user/profile/changer:${userConnected && userConnected.pseudo}+pseudo`}>
                                <button className='btn'>Modifier</button>
                            </Link>
                        </div>
                        <div className='content'>
                            <div className='desc'>
                                <span>Email : </span>
                                <span>
                                    {
                                        userConnected && userConnected.email && userConnected.email.length > 30 ?
                                            userConnected && userConnected.email && userConnected.email.substring(0, reduceLength ? windowSize <= 342 ? 17 : 22 : userConnected && userConnected.email && userConnected.email.length)
                                            : userConnected && userConnected.email
                                    }
                                    {
                                        reduceLength && "..."
                                    }
                                </span>
                            </div>
                            <Link to={`/user/profile/changer:${userConnected && userConnected.email}+email`}>
                                <button className='btn'>Modifier</button>
                            </Link>
                        </div>
                        <div className='content'>
                            <div className='desc'>
                                <span>Numéro de téléphone : </span>
                                <span>{userConnected && userConnected.numTel}</span>
                            </div>
                            <Link to={`/user/profile/changer:${userConnected && userConnected.numTel}+numTel`}>
                                <button className='btn'>Modifier</button>
                            </Link>
                        </div>
                        <div className='content'>
                            <div className='desc'>
                                <span>Mot de passe : </span>
                                <span>****</span>
                            </div>
                            <Link to={`/user/profile/changer:${userConnected && userConnected.pseudo}+password`}>
                                <button className='btn'>Modifier</button>
                            </Link>
                        </div>
                        <div className='content'>
                            <div className='desc'>
                                <span>Vérification en deux étapes : </span>
                                <span>
                                    Ajoutez une couche de sécurité. Exiger un code de vérification en plus de votre mot de passe.
                                </span>
                            </div>
                            <button className='btn'>Activer</button>
                        </div>
                        <div className='content'>
                            <div className='desc'>
                                <span>Compte compromis ? </span>
                                <span>
                                    Prenez des mesures telles que changer votre mot de passe et vous déconnecter partout
                                </span>
                            </div>
                            <button className='btn'>Démarrer</button>
                        </div>
                    </div>
                </div>

                <button className='btn termine'>Terminé</button>
            </div>
            <Footer />
        </>
    )
}

export default Compte