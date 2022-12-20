import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import navbarReducer from "./navbarReducer.js";
import usersReducer from "./usersReducer.js";
import authReducer from "./authReducer.js";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navbarState: navbarReducer,
    usersState: usersReducer,
    authState: authReducer,
    form: formReducer,
});

const store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;