import { authMeThunkCreator } from "./authReducer";

const appState = {
  initialized: false,
  globalError: null,
};

const appReducer = (state = appState, action) => {
  switch (action.type) {
    case "SET-INITIALIZED":
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const successInitializedAC = () => ({ type: "SET-INITIALIZED" });

export const initializeAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authMeThunkCreator());

    promise.then(() => {
        dispatch(successInitializedAC());
    });
};

export default appReducer;