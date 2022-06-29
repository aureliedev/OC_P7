/******************************* FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; /* useDispatch HOOK */
import { getPosts } from "../actions/postActions";
import { isEmpty } from "./Utils";

/*--------- fonction FIL D'ACTU ----------*/
const NewsFeed = () => {
  const [loadPost, setLoadPost] = useState(true); /* Fonction pr charger les posts une seule fois */
  const dispatch = useDispatch(); /* Pr envoyer une action */
  const posts = useSelector((state) => state.postReducer); /* Pr avoir les posts */

  useEffect(() => {
    if (loadPost) { /* Si loadPost est TRUE alors on execute */
      dispatch(getPosts()); /* Pr remplir le store de data */
      setLoadPost(false); /* Une fois que l'action est déclarée : FALSE pr ne plus l'envoyer */
    }
  }, [loadPost, dispatch]); /* callback pour lancer la fonction a chaque chgt */

  /* RENDU VISUEL FRONTEND */
  return (
    <div className="thread-container">
      <ul> {/* Va afficher les cards grace a leurs posts ID */}
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <li> {post._id} </li>;
          })}
      </ul>
    </div>
  )
};
/*---------EXPORT----------*/
export default NewsFeed;
