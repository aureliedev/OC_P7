/******************************* FORMULAIRE DE NEW POST **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty } from "../Utils";

/*--------- FONCTION FORMULAIRE DE POST ----------*/
const NewPostForm = () => {
  const [isLoading, setIsLoading] =
    useState(true); /* Loader si connexion lente */
  const [message, setMessage] = useState(""); /*Pr les messages de post */
  const [postPicture, setPostPicture] = useState(null); /*Pr les images */
  const [file, setFile] = useState(); /* */
  const userData = useSelector((state) => state.userReducer); /* Pr aller cherhcer le contenu du store */

  useEffect(() => {
    if (!isEmpty(userData))
      setIsLoading(false); /*Si le store a la date des users alors on passe le spinner sur FAlse */
  }, [userData]); /* callback de la userData */

  /* RENDU VISUEL FRONTEND */
  return (
    <div className="post-container">
      {isLoading ? (
      <i className="fas fa-spinner fa-pulse"></i> 
      ) : (
      <>
        <NavLink exact to="/profil"> {/* redirige vers le profil de l'user */}
            <div className="user-info"> {/* Affiche l'img de l'user */}
              <img src={userData.picture} alt="img profil utilisateur" />
            </div>
        </NavLink>
        <div className="post-form">
            <textarea 
                name="message"
                id="message"
                placeholder="Quoi de neuf ?"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
            />
        </div>
      </>
      )}
    </div>
  );
};

/*---------EXPORT----------*/
export default NewPostForm;
