/******************************* FORMULAIRE DE NEW POST **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty, timestampParser } from "../Utils";

/*--------- FONCTION FORMULAIRE DE POST ----------*/
const NewPostForm = () => {
  const [isLoading, setIsLoading] =
    useState(true); /* Loader si connexion lente */
  const [message, setMessage] = useState(""); /*Pr les messages de post */
  const [postPicture, setPostPicture] = useState(null); /*Pr les images */
  const [file, setFile] = useState(); /* */
  const userData = useSelector((state) => state.userReducer); /* Pr aller cherhcer le contenu du store */

  const handlePicture = (e) => {

  };

  const cancelPost = () => { /* Annuler le post */
    setMessage('');
    setPostPicture('');
    setFile('');
  };
  
  const handlePost = () => {

  };



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
            {message || postPicture ? ( /* Si le message est sur true alors on affiche */
                <li className="card-container">
                  <div className="card-left">
                    <img src={userData.picture} alt="Img du profil utilisateur"/>
                  </div>  
                  <div className="card-right">
                    <div className="card-header">
                      <div className="pseudo">
                        <h3>{userData.pseudo}</h3>
                      </div>
                      <span> {timestampParser(Date.now())} </span> {/* affiche lheure et la date dans le newpost */}
                    </div>
                    <div className="content"> {/* previsualisation du futur post en front */}
                      <p>{message}</p>
                      <img src={postPicture} alt="" />
                    </div>
                  </div>
                </li>
              ) : null}
          <div className="footer-form">
            <div className="icon">
                {isEmpty() && (
                    <>
                      <img src="./img/icons/picture.svg" alt="img pour la publication" />
                      <input
                        type="file"
                        id="file-upload"
                        name="file"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => handlePicture(e)}
                      />
                    </>
                )}
            </div>
            <div className="btn-send"> {/*Bouton envoyer */}
            {message || postPicture ? ( /* verifie que le message n'est pas vide pr apparaitre */
                 <button className="cancel" onClick={cancelPost}>
                    Annuler message
                 </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                    Envoyer
                </button>
                
            </div>
          </div>
        </div>
      </>
      )}
    </div>
  );
};

/*---------EXPORT----------*/
export default NewPostForm;
