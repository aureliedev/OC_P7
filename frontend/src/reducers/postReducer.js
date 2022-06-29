/* INFOS DE L'USER CONNECTÉ AUXQUELLES ON A ACCÉS */
/*---------IMPORT----------*/
import { GET_POSTS } from "../actions/postActions";

/*-------------------*/
const initialState = {};

/*---------fonction postReducer----------*/
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
