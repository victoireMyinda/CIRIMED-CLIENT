import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import gift from "../../../assets/svg/service.svg"
import "./style.css"
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Navbar from '../../../components/navbarServiceClient/Navbar';

const ApplicationMobile = () => {
    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>

            <div className="messagerieMain mt-3">
                <div className='messagerieToolBar'>
                    <Link to="/user/profile">Votre compte</Link>
                    <FaAngleRight />
                    <span>Application mobile</span>
                </div>

                <div className="messagerieContent">
                    <div className="messagerieImg">
                        <img src={gift} alt="messagerie" width={500} height={400} />
                    </div>
                    <div className="messagerieText">
                        <p>SERVICE NON DISPONIBLE POUR L'INSTANT</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ApplicationMobile;