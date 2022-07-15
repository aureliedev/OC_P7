/*******************************  BOUTON LIKE **********************************/
/*---------IMPORT----------*/
import React, { useContext, useEffect, useState } from "react";
import { UidContext } from "../AppContext";

/*--------- FONCTION BOUTON LIKE ----------*/
const LikeButton = ({ post }) => { 
  const [liked, setLiked] = useState(false); /* On vérifie si ca déjà été liké par l'user */
  const uid = useContext(UidContext);

  useEffect(() => { /* On test si le post est liké */
    if (post.likers.includes(uid)) setLiked(true); /* post.likers: tableau qui regroupe les users qui ont liké avec juste le uid (iD de l'user)*/
    else setLiked(false);
  }, [uid, post.likers, liked]); /* callback (relance si chgt) */

  /* RENDU VISUEL FRONTEND*/
  return <div>BOUTTON LIKE</div>;
};

/*---------EXPORT----------*/
export default LikeButton;
