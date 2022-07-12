/******************************* Post Actions redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------POSTS----------*/
export const GET_POSTS = "GET_POSTS";


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