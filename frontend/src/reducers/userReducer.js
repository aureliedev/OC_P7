/* INFOS DE L'USER CONNECTÉ AUXQUELLES ON A ACCÉS */

/*---------IMPORT----------*/
import { GET_USER, UPDATE_BIO, UPLOAD_PICTURE } from "../actions/userActions";

const initialState = {};

/*---------fonction userReducer----------*/
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case UPLOAD_PICTURE:
      return {
        ...state, /* Pr récup' la data sans l'écraser */
        picture: action.payload, /* MAJ la data */
      };
      case UPDATE_BIO:
      return {
        ...state,
        bio: action.payload,
      };
    default:
      return state;
  }
}
