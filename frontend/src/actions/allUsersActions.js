/******************************* actions de tous les utilisateurs by redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------table des actions----------*/
export const GET_ALL_USERS = "GET_ALL_USERS";

/*---------fonction getAllUsers----------*/
export const getAllUsers = () => {
  return (dispatch) => {
    /* dispatch: ce qui est envoyé au reducer */
    return axios
      .get(`${process.env.REACT_APP_URL_API}api/user`)
      .then((res) => {
        dispatch({
          type: GET_ALL_USERS,
          payload: res.data,
        }); /* type: envoyé au reducer - payload: chargement de la reponse au reducer s*/
      })
      .catch((err) => console.log(err));
  };
};
