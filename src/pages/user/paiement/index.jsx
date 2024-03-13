import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import gift from "../../../assets/svg/service.svg"
import "./style.css"
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Navbar from '../../../components/navbarServiceClient/Navbar';

const Paiements = () => {
    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>
            <div className="paieMain mt-3">
                <div className='paieToolBar'>
                    <Link to="/user/profile">Votre compte</Link>
                    <FaAngleRight />
                    <span>Historique de vos paiements</span>
                </div>

                <div className="paieContent">
                    <div className="paieImg">
                        <img src={gift} alt="paie" width={500} height={400} />
                    </div>
                    <div className="paieText">
                        <p>SERVICE NON DISPONIBLE POUR L'INSTANT</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Paiements;