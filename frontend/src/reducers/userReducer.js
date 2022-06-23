/* INFOS DE L'USER CONNECTÉ AUXQUELLES ON A ACCÉS */

/*---------IMPORT----------*/
import { GET_USER, UPLOAD_PICTURE } from "../actions/userActions";

const initialState = {};

/*---------fonction userReducer----------*/
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state /* Pr récup' la data sans l'écraser */,
        picture: action.payload,
      };
    default:
      return state;
  }
}
