/******************************* FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; /* useDispatch HOOK */
import { getPosts } from "../actions/postActions";

/*--------- fonction FIL D'ACTU ----------*/
const NewsFeed = () => {
  const [loadPost, setLoadPost] = useState(true); /* Fonction pr charger les posts une seule fois */
  const dispatch = useDispatch(); /* Pr envoyer une action */

  useEffect(() => {
    if (loadPost) { /* Si loadPost est TRUE alors on execute */
      dispatch(getPosts()); /* Pr remplir le store de data */
      setLoadPost(false); /* Une fois que l'action est déclarée : FALSE pr ne plus l'envoyer */
    }
  }, [loadPost, dispatch]); /* callback pour lancer la fonction a chaque chgt */

  return (
    <div>
        FIL D'ACTU thread 
    </div>
  )
};
/*---------EXPORT----------*/
export default NewsFeed;
