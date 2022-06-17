/******************************* INDEX DU COMPONENT LOG **********************************/ 

/*------------------IMPORT--------------------*/ 
import React from "react";
import { useState } from "react"; /* useState (hook) renvoie une paire de valeurs dans un tableau de 2 valeurs, récupérée dans les variables entre crochets. */ 
import SignUpForm from "./SignUpForm";
import LogInForm from "./LogInForm";

/*----------------FONCTION LOG--------------------*/ 
function Log(props) {
  const [signUpModal, setSignUpModal] = useState(props.signup); /* (props): pr réutilser la function ailleurs */ 
  const [logInModal, setLogInModal] = useState(props.login);

  /*Pr identifier l'evenement en fonction du clique (INSCRIPTION, SE CONNECTER) */ 
  const handleModals = (e) => {
    if (e.target.id === "signup") {
      setLogInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setLogInModal(true);
    }
  };

  /*---------------- AFFICHAGE RENDU VISUEL --------------------*/ 
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul> {/*--En fonction du clique, affichage de s'inscrire ou se connecter--*/ }
          <li onClick={handleModals} id="signup" className={signUpModal ? "active-btn" : null} > S'inscrire</li>
          <li onClick={handleModals} id="login" className={logInModal ? "active-btn" : null} > Se connecter </li>
        </ul>
        {signUpModal && <SignUpForm />}
        {logInModal && <LogInForm />}
      </div>
    </div>
  );
};

/*------------------EXPORT--------------------*/ 
export default Log;
