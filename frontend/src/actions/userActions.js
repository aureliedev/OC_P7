/******************************* user.actions redux **********************************/
/*---------IMPORT----------*/
import axios from "axios";

/*---------table des actions----------*/
export const GET_USER = "GET_USER";

/*---------fonction getUser----------*/
export const getUser = (uid) => {
    return (dispatch) => { /* dispatch: ce qui est envoyé au reducer */
        return axios
        .get(`${process.env.REACT_APP_URL_API}api/user/${uid}`)
        .then((res) => {
            dispatch({ type: GET_USER, payload: res.data }) /* type: envoyé au reducer - payload: chargement de la reponse au reducer s*/
        })
        .catch((err) => console.log(err));
    }
};