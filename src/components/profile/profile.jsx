import React from 'react';
import './profile.css';
import {  FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { FiX, FiMenu } from "react-icons/fi"



const Profile = () => {

    // const { userConnected } = useContext(ContextApp);

 

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [showToggle, setShowToggle] = React.useState(false);

    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const redirectToFavoris = () => {
    //     if (userConnected) {
    //         navigate("/favoris-produits")
    //     } else {
    //         navigate("/sign-in")
    //     }
    // }

    return (
        <>
            <div className='col-sm-12 navbarService'>

                <div className={showToggle ? "col1 open" : "col1"}>
                    <div className='dataService'>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: 'medium' }}>
                            <Tooltip title="Services clients : Questions fréquentes et abus">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                ><FiPhone color='#000' />
                                    <span style={{ color: "#000" }}>Service client</span>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 25,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem style={{ fontSize: "13px" }}>
                                <Link style={{ textDecoration: "none", color: "black" }}
                                    to='/service-client/question'>Questions frequentes
                                </Link>
                            </MenuItem>

                            <MenuItem style={{ fontSize: "13px" }}>
                                <Link style={{ textDecoration: "none", color: "black" }} to='/signalerAbus'>
                                    Signaler un abus
                                </Link>
                            </MenuItem>
                        </Menu>
                    </div>
                 

                   

                  

                  
                </div>
            </div>
            <div className='toggle'>
                {
                    !showToggle ? <FiMenu onClick={() => setShowToggle(!showToggle)} className={showToggle ? "open" : ""} /> :
                        <FiX onClick={() => setShowToggle(!showToggle)} className={showToggle ? "open" : ""} />
                }
            </div>


            <div className={showToggle ? "navbarServiceFormatPhone open" : "navbarServiceFormatPhone"} >
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: 'medium' }}>
                    <Tooltip title="Account settings" sx={{ display: 'flex', alignItems: 'center', textAlign: 'center', fontSize: 'medium' }}>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        > <span style={{ color: "#000" }}>Service client</span>
                        </IconButton>
                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 25,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem style={{ fontSize: "13px" }}>
                        <Link style={{ textDecoration: "none", color: "black" }} to='/service-client/question'>Questions frequentes</Link>
                    </MenuItem>
                    <MenuItem style={{ fontSize: "13px" }}>
                        <Link style={{ textDecoration: "none", color: "black" }} to='/SignalerAbus'> Signaler un abus</Link>
                    </MenuItem>
                </Menu>
                <Link to="/shops">
                    <span>Découvrir toutes les boutiques</span>
                </Link>
                <Link to="/news-products">Nouveaux produits </Link>
                <Link to="/shop-by-category">Achat par catégorie </Link>

                <Link to='/produits' style={{ textDecoration: "none" }}>
                    Tous les produits
                </Link>

                <Link to='/usage' style={{ textDecoration: "none" }}>
                    Localisation
                </Link>

               
            </div>
        </>
    )
}

export default Profile