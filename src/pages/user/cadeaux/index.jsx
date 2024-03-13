import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import gift from "../../../assets/svg/gift.svg"
import "./style.css"
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Navbar from '../../../components/navbarServiceClient/Navbar';

const CartesCadeaux = () => {
    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>

            <div className="cadeauxMain mt-3">
                <div className='cadeauxToolBar'>
                    <Link to="/user/profile">Votre compte</Link>
                    <FaAngleRight />
                    <span>Historique de vos cadeaux</span>
                </div>

                <div className="cadeauxContent">
                    <div className="cadeauxImg">
                        <img src={gift} alt="cadeaux" width={700} height={400} />
                    </div>
                    <div className="cadeauxText">
                        <p>PAS DE CADEAUX DISPONIBLES</p>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default CartesCadeaux;