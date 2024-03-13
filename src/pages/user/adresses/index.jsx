import React, { useContext, useEffect, useState } from 'react';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import './style.css'
import { FaInfo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ContextApp } from '../../../AppContext';
import { useSelector } from 'react-redux';
import Navbar from '../../../components/navbarServiceClient/Navbar';
import { FiChevronRight } from 'react-icons/fi';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LoaderBlue from '../../../components/loader/LoaderBlue';

const MesAdresses = () => {

    const [searchText, setSearchText] = useState("");
    const [commandeClient, setCommandeClient] = useState([])

    const { userConnected } = useContext(ContextApp)

    const commandes = useSelector(state => state.commandes.value);

    const filterCommande = commandeClient && commandeClient.filter(item => {
        let adresse = item && item.adresse && item.adresse.toLowerCase();
        return adresse && adresse.includes(searchText && searchText.toLowerCase());
    });

    useEffect(() => {
        let dataFilter = commandes && commandes.length > 0 && commandes
            .filter(commande => commande.client.id === parseInt(userConnected && userConnected.id));
        setCommandeClient(dataFilter)
    }, [commandes, userConnected]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    const [currentPage, setCurrentPage] = React.useState(1);
    const [cunt, setCunt] = React.useState(5);

    const lastIndex = currentPage * cunt;
    const firstIndex = lastIndex - cunt;
    const records = commandeClient && commandeClient.length > 0 && commandeClient.slice(firstIndex, lastIndex);
    const nbPage = Math.ceil(commandeClient && commandeClient.length > 0 && commandeClient.length / cunt);
    const numbers = [...Array(commandeClient && nbPage + 1).keys()].slice(1);

    return (
        <>
            <div className='headerNavbar'>
                <Header />
                <Navbar />
            </div>
            <div className="commandesMain">
                <div className='content'>
                    <div className='alert' style={{
                        background: '#0b6cc7d0', color: "#fff",
                        border: "1px solid #ddd", padding: "1rem",
                        display: "flex", alignItems: "center", justifyContent: "space-between"
                    }}>
                        <div>
                            <div className='commandeToolBar'>
                                <Link to="/user/profile">Votre compte</Link>
                                <FiChevronRight />
                                <span>Adresses de commandes</span>
                            </div>
                            <div className='commandeToolBar'>
                                <span>Pages / Adresses </span>
                                <span> {filterCommande && `( ${filterCommande.length} )`}</span>
                            </div>
                        </div>

                        <div style={{ display: "flex", gap: "5px" }}>
                            <input type="text"
                                style={{ borderRadius: "3px", fontSize: "13px" }} className='form-control'
                                placeholder='Rechercher par adresse...' onChange={(e) => setSearchText(e.target.value)} />
                            <select onChange={(e) => setCunt(e.target.value)} style={{ outline: 'none', border: "1px solid #ddd", borderRadius: "3px" }}>
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={50}>50</option>
                                <option value={100}>100</option>
                            </select>
                        </div>
                    </div>

                    <div className='table'>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <input
                                                style={{ border: "2px solid silver", width: 20, height: 20 }}
                                                className="form-check-input" type="checkbox" value=""
                                                id="flexCheckDefault"
                                            />
                                        </TableCell>
                                        <TableCell>ID</TableCell>
                                        <TableCell>ID Commande</TableCell>
                                        <TableCell align="left">Adresse</TableCell>
                                        <TableCell align="left">Options</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {records ? records.length > 0 ? records
                                        .map((row, i) => (
                                            <TableRow
                                                key={row.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell width={60}>
                                                    <input
                                                        className="form-check-input" type="checkbox"
                                                        value="" id="flexCheckDefault"
                                                        style={{ border: "2px solid silver", width: 20, height: 20 }}
                                                    />
                                                </TableCell>
                                                <TableCell width={60}>{i + 1}</TableCell>

                                                <TableCell width={200}>
                                                    {
                                                        row.idCommande
                                                    }
                                                </TableCell>
                                                <TableCell width={500}>
                                                    {
                                                        row.adresse
                                                    }
                                                </TableCell>
                                                <TableCell align="left" width={20}>
                                                    <Link to={{ pathname: "detail" }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                                        <FaInfo size={18} />
                                                    </Link>
                                                </TableCell>
                                            </TableRow>
                                        )) :
                                        filterCommande && filterCommande.length === 0 ?
                                            <TableRow
                                            >
                                                <TableCell colSpan="8px"
                                                    style={{
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    Chargement...
                                                </TableCell>
                                            </TableRow>
                                            :
                                            <TableRow
                                            >
                                                <TableCell
                                                    align='center'
                                                    colSpan="8px"
                                                >
                                                    <LoaderBlue />
                                                </TableCell>
                                            </TableRow> :
                                        <TableRow
                                        >
                                            <TableCell
                                                align='center'
                                                colSpan="8px"
                                            >
                                                <LoaderBlue />
                                            </TableCell>
                                        </TableRow>
                                    }

                                </TableBody>
                            </Table>

                            {
                                <nav className='paginationNav'>
                                    <ul className='pagination'>
                                        <li className='page-item'>
                                            <Link to="#" className='page-link'
                                                onClick={prePage}
                                            >Retour</Link>
                                        </li>
                                        {
                                            numbers && numbers.map((n, i) => {
                                                return (
                                                    <li key={i} className={`page-item ${currentPage === n} ? 'active' : ''`}>
                                                        <Link to="#" className='page-link'
                                                            onClick={() => changePage(n)}
                                                        >{n}</Link>
                                                    </li>
                                                )
                                            })
                                        }
                                        <li className='page-item'>
                                            <Link to="#" className='page-link'
                                                onClick={nextPage}
                                            >Suivant</Link>
                                        </li>
                                    </ul>
                                </nav>
                            }

                        </TableContainer>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== nbPage) {
            setCurrentPage(currentPage + 1)
        }
    }
};

export default MesAdresses;