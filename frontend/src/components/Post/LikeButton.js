/*******************************  BOUTON LIKE **********************************/
/*---------IMPORT----------*/
import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likePost } from "../../actions/postActions";
import { UidContext } from "../AppContext";

/*--------- FONCTION BOUTON LIKE ----------*/
const LikeButton = ({ post }) => { 
  const [liked, setLiked] = useState(false); /* On vérifie si ca déjà été liké par l'user */
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const like = () => {
    dispatch(likePost(post._id, uid))
    setLiked(true);
  };
  const dislike = () => {

  };

  useEffect(() => { /* On test si le post est liké */
    if (post.likers.includes(uid)) setLiked(true); /* post.likers: tableau qui regroupe les users qui ont liké avec juste le uid (iD de l'user)*/
    else setLiked(false);
  }, [uid, post.likers, liked]); /* callback (relance si chgt) */

  /* RENDU VISUEL FRONTEND */
  return (
    <div className="like-container">
        {uid && liked === false && ( /* Si l'user est connecté && like est sur false */
                <img src="./img/icons/heart.svg" onClick={like} alt="like la publication" /> /* On declenche le LIKE */
        )}
        {uid && liked && (
                <img src="./img/icons/heart-filled.svg" onClick={dislike} alt="dislike la publication"/>
            )}
    </div>
  )
};

/*---------EXPORT----------*/
export default LikeButton;
