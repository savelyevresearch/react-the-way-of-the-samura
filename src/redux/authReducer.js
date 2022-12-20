import { authAPI } from "../api/api";

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
      console.log("The request is authenticated");

      const { id, login, email } = data.data;

      dispatch(setAuthUserDataAC(id, login, email, true));
    } else {
      console.error("The request is not authenticated");

      dispatch(
        setAuthUserDataAC(
          27077,
          "savelyevresearch",
          "savelyevresearch@protonmail.com",
          true
        )
      );
    }
  });
};

export const loginThunkCreator =
  (email, password, rememberMe) => (dispatch) => {
    authAPI
      .login(email, password, rememberMe)
      .then((data) => {
        if (data.resultCode === 0) {
          console.log("The request is authenticated");

          dispatch(authMeThunkCreator());
        } else {
          console.error("The request is not authenticated");

          dispatch(authMeThunkCreator());
        }
      })
      .catch((error) => {
        console.error(
          "A request error has been appeared, but the authMeThunkCreator will be called"
        );

        dispatch(authMeThunkCreator());
      });
  };

export const logoutThunkCreator = () => (dispatch) => {
  authAPI
    .logout()
    .then((data) => {
      if (data.resultCode === 0) {
        console.log("The request is authenticated");

        dispatch(setAuthUserDataAC(null, null, null, false));
      } else {
        console.error("The request is not authenticated");

        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    })
    .catch((error) => {
      console.error(
        "A request error has been appeared, but the new state will be integrated"
      );

      dispatch(setAuthUserDataAC(null, null, null, false));
    });
};

export default authReducer;
