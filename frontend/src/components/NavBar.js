/******************************* BARRE DE NAVIGATION **********************************/
/*---------IMPORT----------*/
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UidContext } from "./AppContext";
import Logout from "./Log/Logout";

/*---------FUNCTION NAVBAR----------*/
const NavBar = () => {
  const uid = useContext(UidContext); /* on verifie si luser a ses données */
  const userData = useSelector((state) => state.userReducer) /* Pr recupé la data de l'user pr pouvoir la réutiliser */
  
  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact="true" to="/">
            <div className="logo">
              <img
                src="./img/icon-left-font-monochrome-black.svg"
                alt="Logo Groupomania"
              />
            </div>
          </NavLink>
        </div>
        {uid ? (
          <ul>
            <li></li>
            <li className="welcome">
              <NavLink exact to="/profil">
                 <h5>Bienvenue {userData.pseudo}</h5> {/* récup le pseudo grace a redux */}
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact="true" to="/profil">
                <img src="./img/icons/login.svg" alt="Login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

/*---------EXPORT----------*/
export default NavBar;
