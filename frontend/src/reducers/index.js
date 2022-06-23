/******************************* ALL DATA REDUCERS **********************************/
/*---------IMPORT----------*/
import { combineReducers } from 'redux'; /* récup' ALL et envoi vers le store */
import userReducer from './user.reducer';


/*---------EXPORT----------*/
export default combineReducers({
    userReducer
});