import React from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import gift from "../../../assets/svg/service.svg"
import "./style.css"
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import Navbar from '../../../components/navbarServiceClient/Navbar';

const CongoMartBussiness = () => {
    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>
            <div className="businessMain mt-3">
                <div className='businessToolBar'>
                    <Link to="/user/profile">Votre compte</Link>
                    <FaAngleRight />
                    <span>Congomart Bussiness</span>
                </div>

                <div className="businessContent">
                    <div className="businessImg">
                        <img src={gift} alt="business" width={500} height={400} />
                    </div>
                    <div className="businessText">
                        <p>SERVICE NON DISPONIBLE POUR L'INSTANT</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CongoMartBussiness;