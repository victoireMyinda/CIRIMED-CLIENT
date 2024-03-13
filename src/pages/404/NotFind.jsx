import React from 'react';
import Header from '../../components/header/Header';
import Navbar from '../../components/navbarServiceClient/Navbar';
import Footer from '../../components/footer/Footer';

const NotFind = () => {
    return (
        <div style={{backgroundColor:"white"}}>
            <Header />
            <Navbar />
            <div style={{
                width : "70%",
                margin : "auto",
                height : "500px"
            }}>
               404
            </div>
            <Footer />
        </div>
    );
};

export default NotFind;