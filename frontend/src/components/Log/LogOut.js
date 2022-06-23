/******************************* LOGOUT **********************************/
/*---------IMPORT----------*/
import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie'; /* Pour retirer le cookie du front egalement*/

/*---------Function LOGOUT----------*/
const Logout = () => {

    const removeCookie = (key) => {
        if (window !== "undefined") { /* si la fenetre n'est pas undeined */
        cookie.remove(key, { expires: 1 }); /* expire en 1milliseconde */
        }
      };

    const Logout = async () => {
        await axios({
          method: "get",
          url: `${process.env.REACT_APP_URL_API}api/user/logout`,
          withCredentials: true,
        })
          .then(() => removeCookie("jwt"))
          .catch((err) => console.log(err));
        
        window.location = "/";
      };

    return (
        <li onClick={Logout}>
            <img src="./img/icons/logout.svg" alt="Déconnexion" />
        </li>
    );
};

/*---------EXPORT----------*/
export default Logout;