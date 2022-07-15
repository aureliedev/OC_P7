/*******************************  CARD DU FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { isEmpty, parserDate } from "../Utils";
import LikeButton from "./LikeButton";

/*---------Fonction des cards----------*/
const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true); /* LOADING de chargement qui charge au debut(TRUE) */
  const [isUpdated, setIsUpdated] = useState(false); /* Si chgt du CRUD */
  const [textUpdate, setTextUpdate] = useState(null); /* Pr stoker le chgt de texte qui est NULL de base */
  const allUsersData = useSelector((state) => state.allUsersReducer); /* Pr avoir la data des utilisateurs */
  const userData = useSelector((state) => state.userReducer); /* Pr avoir la data d'un utilisateur */

  const updateItem = () => { /* fonction pour mettre a jour le message du post */
    // if (textUpdate) {
    //   dispatch(updatePost(post._id, textUpdate));
    // }
    // setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(allUsersData[0]) &&
      setIsLoading(
        false
      ); /*Si la data est présente, on retire le LOADING de fontasome */
  }, [allUsersData]);

  /* RENDU VISUEL FRONTEND */
  return (
    <li className="card-container" key={post._id}>
      {isLoading ? (
        /* isLoading est sur TRUE alors.. */ <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img /* Récup de la data des images */ 
              src={
                !isEmpty(
                  allUsersData[0]
                ) /* On verifie si la data est présente */ &&
                allUsersData
                  .map((user) => {
                    /* map: pr chercher la photo de l'user */
                    if (user._id === post.posterId) {
                      return user.picture; /* Si photo trouvé, on l'affiche */
                    } else {
                      return null; /* Sinon stop */
                    }
                  })
                  .join("") /* string vide pour ne pas mettre de virgule entre chaque lettre */
              }
              alt="Avatar utilisateur"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3> 
                  { /* Récup du pseudo utilisateur */ 
                    !isEmpty(allUsersData[0]) &&
                      allUsersData.map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                  }
                </h3>
              </div>
              <span>{parserDate(post.createdAt)}</span> {/* affichage de la date (fonction dans utils.js) */ }
            </div>
            {isUpdated === false && <p>{post.message} </p>} {/* Si chgt alors tu affiches le boutton */}
            {isUpdated && (
              <div className="update-post"> 
                <textarea
                  defaultValue={post.message} /* Affiche le message initial */
                  onChange={(e) => setTextUpdate(e.target.value)} /* A chaque changement on récup la value */
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modifications
                  </button>
                </div>
              </div>
            )}
            {post.picture && (
              <img src={post.picture} alt="photographie de post" className="card-pic" />
            )}
            {userData._id === post.posterId && (
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}> {/* !isUpdated: Pr ne plus afficher l'icone de modif post en recliquant dessus */}
                  <img src="./img/icons/edit.svg" alt="éditer la publication" />
                </div>
              </div>
            )}
            <div className="card-footer"> 
              <LikeButton post={post} />
            </div>
          </div>
        </>
      )}
    </li>
  );
};

/*---------EXPORT----------*/
export default Card;
