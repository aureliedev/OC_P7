/******************************* Post Actions redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------POSTS----------*/
export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
//export const DISLIKE_POST = "DISLIKE_POST";

/*---------getPosts----------*/
export const getPosts = () => {
  return (dispatch) => { /* dispatch: ce qui est envoyé au reducer */
    return axios 
      .get( `${process.env.REACT_APP_URL_API}api/post/` )
      .then((res) => {
        dispatch({ /* dispatch de la res dans le store */
          type: GET_POSTS,
          payload: res.data,
        }); /* type: envoyé au reducer - payload: chargement de la reponse au reducer s*/
      })
      .catch((err) => console.log(err));
  }
};

/*---------likePost----------*/
export const likePost = (postId, userId) => {
  return (dispatch) => {
  return axios({
    method: "patch",
    url: `${process.env.REACT_APP_URL_API}api/post/likepost/` + postId, /* chemin en backend + postId */
    data: { id: userId }, /* data:on passe juste le userId en req.body car postId est dans l'URL */
  })
    .then((res) => {
      dispatch({ type: LIKE_POST, payload: { postId, userId } }); /* dispatch de la res dans le store */
    })
    .catch((err) => console.log(err));
  }
}