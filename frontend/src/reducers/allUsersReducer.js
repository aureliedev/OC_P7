/* INFOS DE TOUS LES USERS AUXQUELLES ON A ACCÉS */

/*---------IMPORT----------*/
import { GET_ALL_USERS } from "../actions/allUsersActions";

const initialState = {};

/*---------fonction allUsersReducer----------*/
export default function allUsersReducer(state = initialState, action) {
  switch (action.type /* type d'actions à recevoir */) {
    case GET_ALL_USERS:
      return action.payload;
    default:
      return state;
  }
};
