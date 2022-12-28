import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const authState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaURL: null,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "SET-USER-DATA":
      return {
        ...state,
        ...action.userData,
      };
    case "SET-CAPTCHA-URL":
      return {
        ...state,
        captchaURL: action.captchaURL,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, login, email, isAuth) => ({
  type: "SET-USER-DATA",
  userData: { userId, email, login, isAuth },
});

export const setCaptchaUrlAC = (captchaURL) => ({
  type: "SET-CAPTCHA-URL",
  captchaURL: captchaURL,
});

export const authMeThunkCreator = () => (dispatch) => {
  return authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;

      dispatch(setAuthUserDataAC(id, login, email, true));
    } else {
      console.log("The resultCode property is equal to 1");
    }
  });
};

export const loginThunkCreator =
  (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI
      .login(email, password, rememberMe, captcha)
      .then((data) => {
        if (data.resultCode === 0) {
          dispatch(authMeThunkCreator());
        } else {
          if (data.resultCode === 10) {
            dispatch(getCaptchaUrlThunkCreator());
          }

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

const getCaptchaUrlThunkCreator = () => async (dispatch) => {
  try {
    const response = await securityAPI.getCaptchaUrl();
    const captchaURL = response.data.url;

    setCaptchaUrlAC(captchaURL);
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export default authReducer;