/******************************* Post Actions redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------POSTS----------*/
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const LIKE_POST = "LIKE_POST";
export const DISLIKE_POST = "DISLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

/*---------getPosts----------*/
export const getPosts = (number) => { /*number: nbre de posts pr l'infinite scroll */
  return (dispatch) => { /* dispatch: ce qui est envoyé au reducer */
    return axios 
      .get( `${process.env.REACT_APP_URL_API}api/post/` )
      .then((res) => {
        const array = res.data.slice(0, number) /* Pr récup les 5 premiers post de l'infinite scroll */
        dispatch({ /* dispatch de la res dans le store */
          type: GET_POSTS,
          payload: array
        }); /* type: envoyé au reducer - payload: chargement de la reponse au reducer s*/
      })
      .catch((err) => console.log(err));
  }
};

/*---------AddPost----------*/
export const addPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_URL_API}api/post/`, data)
      
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
};

/*---------dislikePost----------*/
export const dislikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_URL_API}api/post/dislikepost/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: DISLIKE_POST, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

/*---------UpdatePost----------*/
export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_URL_API}api/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, payload: { message, postId } });
      })
      .catch((err) => console.log(err));
  };
};

/*---------deletePost----------*/
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL_API}api/post/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};