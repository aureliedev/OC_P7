/******************************* FORMULAIRE D' INSCRIPTION 'SIGNUP'**********************************/
/*---------IMPORT----------*/
import React, { useState } from "react";
import axios from "axios";
import LogInForm from "./LogInForm";

/* fonction du formulaire d'inscription */
function SignUpForm() {
    
    const [formSubmit, setFormSubmit] = useState(false); /* formsubmit pour que l'user se connecte une fois son inscription */
    const [pseudo, setPseudo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    /* Pour la communication avec le backend */
    const handleSignup = async (e) => {
        e.preventDefault(); /* pas de rechargement de page quand il y a une action */

        /* Gestion des errors */
        const pseudoError = document.querySelector('.pseudo.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');

        //passwordConfirmError.innerHTML = "";

        if(password !== controlPassword) {
            passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
        } 
        else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_URL_API}api/user/signup`,
                withCredentials: true /* authoriser l'envoie des requetes */,
                data: {
                    pseudo,
                    email,
                    password
                }
            })
            .then((res) => {
                console.log(res);
                if (res.data.errors) {
                    pseudoError.innerHTML = res.data.errors.pseudo;
                    emailError.innerHTML = res.data.errors.email;
                    passwordError.innerHTML = res.data.errors.password;
                } else {
                    setFormSubmit(true);
                }
            })
            .catch((err) => console.log(err));
        }
    }

    /* Affichage du fomulaire Inscription en front */
    return (
        <>
            {formSubmit ? ( /* si le loginform est sur TRUE l'user peut se connecté */
                <>
                <LogInForm />
                <span></span>
                <h4 className="success">Inscription réussie, vous pouvez vous connecter!</h4>
                </>
            ) : (
                <form action="" onSubmit={handleSignup} id="sign-up-form">
                    <label htmlFor="pseudo">Pseudo</label> {/*htmlFor est l'équivalent React de for en JS*/}
                    <br/>
                    <input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo}/>
                    <div className="pseudo error"></div>
                    <br/>
                    <label htmlFor="email">Email</label> {/*htmlFor est l'équivalent React de for en JS*/}
                    <br/>
                    <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    <div className="email error"></div>
                    <br/>
                    <label htmlFor="password">Mot de passe</label>
                    <br/>
                    <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                    <div className="password error"></div>
                    <br/>
                    <label htmlFor="password">Confirmez le mot de passe</label>
                    <br/>
                    <input type="password" name="controlPassword" id="password-conf" onChange={(e) => setControlPassword(e.target.value)} value={controlPassword}/>
                    <div className="password-confirm error"></div>
                    <br/>
                    <input type="submit" value="S'inscrire"/>
                </form>
            )}
        </>
    )
};
/*---------EXPORT----------*/
export default SignUpForm

