/******************************* FORMULAIRE DE CONNEXION 'LOGIN' **********************************/

/*---------IMPORT----------*/
import React, { useState } from "react";
import axios from "axios";

/* fonction du formulaire Login */
function LogInForm () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* Pour la communication avec le backend */
  const handleLogin = (e) => {
    e.preventDefault(); /* pas de rechargement de page quand il y a une action */

    /* Gestion des errors */
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    if (!email || !password) {
      alert ("veuillez remplir tous les champs du formulaire");
    } else {
      axios ({ /* Pour les requetes */
          method: "post",
          url: `${process.env.REACT_APP_URL_API}api/user/login`,
          withCredentials: true,
          data: {
            email,
            password,
          },
        })
        .then ((res) =>{
        console.log(res);
        if (res.data.errors){ /* Gestion des errors du backend */
          emailError.innerHTML= res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          console.log(res.data.emailError, emailError);

        } else {
          window.location="/feed"; /* Connexion réussie */
        }
      })
      .catch ((err) => {
          console.log(err);
      })
      }}

  /* Affichage du fomulaire Login*/
  return (
    <form action='' onSubmit={handleLogin} id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <div className="email error"></div>
      {/* pour la remontée des errors sur l'email*/}
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password" //type password pr masquer le password avec les boules
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      {/* pour la gestion des errors sur le password*/}
      <br />
      <input type="submit" value="Se connecter" />
    </form>
  );
}

/*---------EXPORT--------*/
export default LogInForm;
