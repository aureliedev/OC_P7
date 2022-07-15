/* INFOS DE L'USER CONNECTÉ AUXQUELLES ON A ACCÉS */
/*---------IMPORT----------*/
import { GET_POSTS, LIKE_POST } from "../actions/postActions";

/*-------------------*/
const initialState = {};

/*---------fonction postReducer----------*/
export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS: /*GET POSTS */
      return action.payload;
    case LIKE_POST: /*LIKE POST */
      return state.map((post) => { /* On map les posts */
        if (post._id === action.payload.postId) { /*il faut qu le post soit egal au postId q'on envoi = ON identifit le post en question */
          return {
            ...post,
            likers: [action.payload.userId, ...post.likers], /* On prend le tableau des userId et on mets a la suite les likers */
          };
        }
        return post;
      });
    default:
      return state;
  }
};
