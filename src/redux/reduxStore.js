import { legacy_createStore as createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import navbarReducer from "./navbarReducer.js";
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navbarState: navbarReducer,
    usersState: usersReducer,
    authState: authReducer,
});

const store = createStore(reducers);

export default store;