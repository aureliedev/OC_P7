/******************************* FIL D'ACTUALITÉ **********************************/
/*---------IMPORT----------*/
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"; /* useDispatch HOOK */
import { getPosts } from "../actions/postActions";
import Card from "./Post/Card";
import { isEmpty } from "./Utils";

/*--------- fonction FIL D'ACTU ----------*/
const NewsFeed = () => {
  const [loadPost, setLoadPost] = useState(true); /* Fonction pr charger les posts une seule fois */
  const [count, setCount] = useState(5); /* Affichage de 5 posts par 5 pour l'infinite Scroll */
  const dispatch = useDispatch(); /* Pr envoyer une action */
  const posts = useSelector((state) => state.postReducer); /* Pr avoir les posts */

  const loadMore = () => { /* fonction infinite scroll */
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) { /* Pr savoir si on est en bas de page */
      setLoadPost(true); /* Si oui affiche les autre posts 5 par 5 */
    }
  }

  useEffect(() => {
    if (loadPost) { /* Si loadPost est TRUE alors on execute */
      dispatch(getPosts(count)); /* Pr remplir le store de data // count pour le nbre de posts infinite scroll */
      setLoadPost(false); /* Une fois que l'action est déclarée : FALSE pr ne plus l'envoyer */
      setCount(count + 5); /* Pr affichage des posts de 5 en 5 */
    }

    window.addEventListener('scroll', loadMore); /* A chaque event on analyse dans le DOM la fonction loadMore */
    return () => window.removeEventListener('scroll', loadMore); /* removeeventlistener dans la doc useEffect */

  }, [loadPost, dispatch, count]); /* callback pour lancer la fonction a chaque chgt */

  /* RENDU VISUEL FRONTEND */
  return (
    <div className="thread-container">
      <ul> {/* Va afficher les cards grace a leurs posts ID */}
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card post={post} key={post._id} />; /* Récup les post et une key unique grace au post.ID */
          })}
      </ul>
    </div>
  )
};
/*---------EXPORT----------*/
export default NewsFeed;
