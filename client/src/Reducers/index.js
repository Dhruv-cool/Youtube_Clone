import  {combineReducers}  from "redux";
import authReducer from "./auth";
import chanelReducers from './Chanel'
import videoReducer from "./Video";
import  currentUserReducer from './currentUser'
export default combineReducers({
    authReducer,
    currentUserReducer,
    chanelReducers,
     videoReducer
});