/******************************* ALL DATA REDUCERS **********************************/
/*---------IMPORT----------*/
import { combineReducers } from 'redux'; /* récup' ALL et envoi vers le store */
import userReducer from './userReducer';


/*---------EXPORT----------*/
export default combineReducers({
    userReducer
});