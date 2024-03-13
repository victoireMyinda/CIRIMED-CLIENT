import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/header/Header';
import Footer from '../../../components/footer/Footer';
import { ContextApp } from '../../../AppContext';
import './style.css'
import { FaInfo, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/navbarServiceClient/Navbar';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import LoaderBlue from '../../../components/loader/LoaderBlue';
import { FiChevronRight } from 'react-icons/fi';
import { timestampParser } from '../../../Utils';

const MesCommandes = () => {

    const [searchText, setSearchText] = useState("");
    const [commandeClient, setCommandeClient] = useState([]);

    const { userConnected } = useContext(ContextApp);

    const commandes = useSelector(state => state.commandes.value);

    const filterCommande = commandeClient && commandeClient.filter(item => {
        let adresse = item && item.adresse && item.adresse.toLowerCase();
        return adresse && adresse.includes(searchText && searchText.toLowerCase());
    });

    useEffect(() => {
        let dataFilter = commandes && commandes.length > 0 && commandes
            .filter(commande => commande && commande.client && parseInt(commande.client.id) === parseInt(userConnected && userConnected.id));
        setCommandeClient(dataFilter);
    }, [commandes, userConnected]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [cunt, setCunt] = React.useState(5);

    const lastIndex = currentPage * cunt;
    const firstIndex = lastIndex - cunt;
    const records = filterCommande && filterCommande.length > 0 && filterCommande.slice(firstIndex, lastIndex);
    const nbPage = Math.ceil(filterCommande && filterCommande.length > 0 && filterCommande.length / cunt);
    const numbers = [...Array(filterCommande && nbPage + 1).keys()].slice(1);

    useEffect(() => {
        const title = document.querySelector("html head title");
        const pseudo = userConnected && userConnected.pseudo
        title.innerHTML = "Commandes / " + pseudo;
    }, [userConnected]);

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
                                <span>Historique de vos commandes</span>
                            </div>
                            <div className='commandeToolBar'>
                                <span>Pages / Historique </span>
                                <span> {filterCommande && `( ${filterCommande.length} )`}</span>
                            </div>
                        </div>

                        <div style={{display:"flex", gap:"5px"}}>
                            <input type="text"
                             style={{borderRadius:"3px", fontSize:"13px"}} className='form-control'
                              placeholder='Rechercher par adresse...' onChange={(e)=>setSearchText(e.target.value)} />
                            <select onChange={(e) => setCunt(e.target.value)} style={{ outline: 'none', border:"1px solid #ddd", borderRadius:"3px" }}>
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
                                        <TableCell align="left">N.Articles</TableCell>
                                        <TableCell align="left">Prix Total</TableCell>
                                        <TableCell align="left">Mode Livraison</TableCell>
                                        <TableCell align="left">Date</TableCell>
                                        <TableCell align="left">Status</TableCell>
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
                                                <TableCell align="left" width={100} style={{ fontWeight: "400", lineHeight: "1.4rem" }}>
                                                    {
                                                        row.quantite
                                                    }
                                                </TableCell>
                                                <TableCell width={300}>
                                                    {
                                                        `${row && row.priceTotal}  ${row && row.devise}`
                                                    }
                                                </TableCell>
                                                <TableCell width={300}>
                                                    {
                                                        row.modeLivraison
                                                    }
                                                </TableCell>
                                                <TableCell width={500}>
                                                    {
                                                        timestampParser(row && row.createdAt)
                                                    }
                                                </TableCell>
                                                <TableCell width={220}>
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                        {
                                                            row && row.statusLivraison === false ? <span style={{
                                                                background: "orange", fontSize: "13px",
                                                                borderRadius: "25px", color: "#fff", padding: '5px',
                                                                width:"auto"
                                                            }}>
                                                                En cours...
                                                            </span> : <span style={{
                                                                background: "green", fontSize: "13px",
                                                                borderRadius: "25px", color: "#fff", padding: '5px',
                                                                width:"auto"
                                                            }}>
                                                                Livrée.
                                                            </span>
                                                        }
                                                        <div>
                                                            <div style={{ fontWeight: "600", }}>{row.nom}</div>
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left" width={20}>
                                                    <Link to={{ pathname: "detail" }} state={{ data: row }} style={{ color: "#111" }} className="me-1">
                                                        <FaInfo size={18} />
                                                        <FaTrashAlt size={18} />
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

export default MesCommandes;