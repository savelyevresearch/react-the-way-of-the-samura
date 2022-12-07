import { legacy_createStore as createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import dialogsReducer from "./dialogsReducer.js";
import navbarReducer from "./navbarReducer.js";

const reducers = combineReducers({
    profileState: profileReducer,
    dialogsState: dialogsReducer,
    navbarState: navbarReducer,
});

const store = createStore(reducers);

export default store;