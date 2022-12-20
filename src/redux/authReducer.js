import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const authState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...action.userData,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, login, email, isAuth) => ({
  type: "SET-USER-DATA",
  userData: { userId, email, login, isAuth },
});

export const authMeThunkCreator = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;

      dispatch(setAuthUserDataAC(id, login, email, true));
    } else {
      console.log("The resultCode property is equal to 1");
    }
  });
};

export const loginThunkCreator =
  (email, password, rememberMe) => (dispatch) => {
    authAPI
      .login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(authMeThunkCreator());
        } else {
          const message =
            data.messages.length > 0
              ? data.messages[0]
              : "Something went wrong...";

          dispatch(stopSubmit("login", { _error: message }));
        }
      })
      .catch((error) => {
        console.error(`Something went wrong (request error): ${error.message}`);
      });
  };

export const logoutThunkCreator = () => (dispatch) => {
  authAPI
    .logout()
    .then((data) => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      } else {
        console.log("The resultCode property is equal to 1");
      }
    })
    .catch((error) => {
      console.error(`Something went wrong (request error): ${error.message}`);
    });
};

export default authReducer;
