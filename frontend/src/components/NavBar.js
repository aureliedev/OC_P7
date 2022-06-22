/******************************* BARRE DE NAVIGATION **********************************/ 
/*---------IMPORT----------*/
import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <div className="nav-container">
            <div className="logo">
                    <NavLink exact="true" to="/">
                        <div className="logo">
                            <img src="./img/icon-left-font-monochrome-black.svg" alt="Logo Groupomania"/>
                            {/* <h1>Groupomania</h1> */}
                        </div>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;