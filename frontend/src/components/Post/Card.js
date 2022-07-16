/*******************************  CARD DU FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/postActions";
import { isEmpty, parserDate } from "../Utils";
import DeleteCard from "./DeleteCard";
import LikeButton from "./LikeButton";

/*---------Fonction des cards----------*/
const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true); /* LOADING de chargement qui charge au debut(TRUE) */
  const [isUpdated, setIsUpdated] = useState(false); /* Si chgt du CRUD */
  const [textUpdate, setTextUpdate] = useState(null); /* Pr stoker le chgt de texte qui est NULL de base */
  const allUsersData = useSelector((state) => state.allUsersReducer); /* Pr avoir la data des utilisateurs */
  const userData = useSelector((state) => state.userReducer); /* Pr avoir la data d'un utilisateur */
  const dispatch = useDispatch();

  const updateItem = () => { /* fonction pour mettre a jour le message du post */
    if (textUpdate) { /* On vérifie si il y a un new post */
      dispatch(updatePost(post._id, textUpdate)); /*Si oui on MAJ le post avec son Id et le texte du message */
    }
    setIsUpdated(false);
  };

  useEffect(() => {
    !isEmpty(allUsersData[0]) &&
      setIsLoading(false); /*Si la data est présente, on retire le LOADING de fontasome */
  }, [allUsersData]); /* callback de oute la data des users */

  /* RENDU VISUEL FRONTEND */
  return (
    <li className="card-container" key={post._id}>
      {isLoading ? ( /* isLoading est sur TRUE alors.. */ 
      <i className="fas fa-spinner fa-spin"></i>
      ) : (
        <>
          <div className="card-left">
            <img /* Récup de la data des images */
              src={
                !isEmpty(
                  allUsersData[0]
                ) /* On verifie si la data est présente */ &&
                allUsersData
                  .map((user) => { /* map: pr chercher la photo de l'user */
                    if (user._id === post.posterId) {
                      return user.picture; /* Si photo trouvé, on l'affiche */
                    } else {
                      return null; /* Sinon stop */
                    }
                  })
                  .join(
                    ""
                  ) /* string vide pour ne pas mettre de virgule entre chaque lettre */
              }
              alt="Avatar utilisateur"
            />
          </div>
          <div className="card-right">
            <div className="card-header">
              <div className="pseudo">
                <h3>
                  {
                    /* Récup du pseudo utilisateur */
                    !isEmpty(allUsersData[0]) &&
                      allUsersData.map((user) => {
                        if (user._id === post.posterId) return user.pseudo;
                        else return null;
                      })
                  }
                </h3>
              </div>
              <span>{parserDate(post.createdAt)}</span>{" "}  {/* affichage de la date (fonction dans utils.js) */}
            </div>
            {isUpdated === false && <p>{post.message} </p>}{" "}
            {/* Si chgt alors tu affiches le boutton */}
            {isUpdated && (
              <div className="update-post">
                <textarea
                  defaultValue={post.message} /* Affiche le message initial */
                  onChange={(e) =>
                    setTextUpdate(e.target.value)
                  } /* A chaque changement on récup la value */
                />
                <div className="button-container">
                  <button className="btn" onClick={updateItem}>
                    Valider modifications
                  </button>
                </div>
              </div>
            )}
            {post.picture && (
              <img
                src={post.picture}
                alt="photographie de post"
                className="card-pic"
              />
            )}
            {userData.isAdmin ? ( /* Gestion des posts grace a l'administrateur */
              <div className="button-container">
                <div onClick={() => setIsUpdated(!isUpdated)}>
                  <img src="./img/icons/edit.svg" alt="edit" />
                </div>
                <DeleteCard id={post._id} />
              </div>
            ) : (
              userData._id === post.posterId && (
                <div className="button-container">
                  <div onClick={() => setIsUpdated(!isUpdated)}>
                    <img src="./img/icons/edit.svg" alt="edit" />
                  </div>
                  <DeleteCard id={post._id} />
                </div>
              )
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
