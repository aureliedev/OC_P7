/*---------IMPORT----------*/ 
import React from "react";
import Log from "../components/Log";

/*---------FONCTION PROFIL----------*/ 
function Profil() {
  return (
    <div className="profil-page">
      <div className="log-container">
        <Log login={false} signup={true} /> {/* Log/index.js ligne 10>12 (props): pr afficher ce que l'on souhaite en premier ( Signin en l'occurence)*/}
        <div className="img-container">
          <img src="./img/icon-left-font.svg" alt="img-connexion" />
        </div>
      </div>
    </div>
  );
};

/*---------EXPORT--------*/ 
export default Profil;
