/******************************* user.actions redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------table des actions----------*/
export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";

/*---------fonction getUser----------*/
export const getUser = (uid) => {
  return (dispatch) => {
    /* dispatch: ce qui est envoyé au reducer */
    return axios
      .get(`${process.env.REACT_APP_URL_API}api/user/${uid}`)
      .then((res) => {
        dispatch({
          type: GET_USER,
          payload: res.data,
        }); /* type: envoyé au reducer - payload: chargement de la reponse au reducer s*/
      })
      .catch((err) => console.log(err));
  };
};

/*---------fonction Upload Picture----------*/
export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_URL_API}api/user/upload/`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_URL_API}api/user/${id}/`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
          });
      })
      .catch((err) => console.log(err));
  };
};
