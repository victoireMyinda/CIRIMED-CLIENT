import  { useEffect } from 'react';
import Footer from '../../components/footer/Footer';
import "./index.css"
import { FiCreditCard, FiGift, FiHome, FiLock, FiMessageCircle, FiPhoneCall, FiShoppingCart } from 'react-icons/fi';
import { FaAndroid, FaBusinessTime } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProfilVisiteur = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
             <div className='headerNavbar'>
            </div>
            <div className='profilUser'>
                <div className='title'>Votre compte</div>
                <div className='grilleCompte'>
                    <div className='card'>
                        <Link to="/user/commandes">
                            <FiShoppingCart size={30} />
                            <div className='nameDesc'>
                                <div>Vos commandes</div>
                                <div>Suivre, retourner ou acheter à niveau</div>
                            </div>
                        </Link>
                    </div>

                    <div className='card'>
                        <Link to="/user/compte-et-securite">
                            <FiLock size={40} />
                            <div className='nameDesc'>
                                <div>Connexion & sécurité</div>
                                <div>Modifier vos informations liées à votre authentification</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/user/cadeaux">
                            <FiGift size={45} />
                            <div className='nameDesc'>
                                <div>Cartes cadeaux</div>
                                <div>Ajouter une carte cadeau, voir votre solde, recharger votre compte</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/user/adresses">
                            <FiHome size={50} />
                            <div className='nameDesc'>
                                <div>Adresses</div>
                                <div>Modifier les adresses et les préférences de livraison des commandes et des cadeaux</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/user/paiement">
                            <FiCreditCard size={50} />
                            <div className='nameDesc'>
                                <div>Vos paiements</div>
                                <div>Afficher toutes les transactions, gérer les modes de paiement et les paramètres</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/user/messagerie">
                            <FiMessageCircle size={40} />
                            <div className='nameDesc'>
                                <div>Centre de messagerie</div>
                                <div>Consulter les messages de congo mart et vendeurs tiers</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/application-mobile">
                            <FaAndroid size={35} />
                            <div className='nameDesc'>
                                <div>Application mobile</div>
                                <div>Télécharger application congomart</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/contact-nous">
                            <FiPhoneCall size={40} />
                            <div className='nameDesc'>
                                <div>Nous contacter</div>
                                <div>Contacter notre service client par téléphone, chat ou e-mail</div>
                            </div>
                        </Link>
                    </div>
                    <div className='card'>
                        <Link to="/user/congomartBussiness">
                            <FaBusinessTime size={40} />
                            <div className='nameDesc'>
                                <div>Congo mart Business</div>
                                <div>Télécharger vos factures avec TVA, économiser sur vos achats professsionnels et plus encore</div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    );
};

export default ProfilVisiteur;