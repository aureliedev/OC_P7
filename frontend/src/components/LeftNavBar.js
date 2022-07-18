/******************************* BARRE DE NAVIGATION GAUCHE **********************************/

/*---------IMPORT----------*/
import React from "react";
import { NavLink } from "react-router-dom";

/*---------Component LeftNavBar----------*/
const LeftNavBar = () => {

    
  /*---------Affichage FRONTENT----------*/
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/feed" exact activeclassname="active-left-nav">
            <img src="./img/icons/home.svg" alt="Accueil" />
          </NavLink>
          <br />
          <NavLink to="/profil" exact activeclassname="active-left-nav">
            <img src="./img/icons/user.svg" alt="Page profil" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

/*---------EXPORT----------*/
export default LeftNavBar;
