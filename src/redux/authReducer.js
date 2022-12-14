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
        ...state,
        ...action.userData,
        isAuth: true,
      };
    default:
      return state;
  }
};

export const setAuthUserDataAC = (userId, login, email) => ({
  type: "SET-USER-DATA",
  userData: { userId, email, login },
});

export const authMeThunkCreator = () => (dispatch) => {
  authAPI.authMe().then((data) => {
    if (data.resultCode === 0) {
      console.log("The request is authenticated");

      const { id, login, email } = data;

      dispatch(setAuthUserDataAC(id, login, email));
    } else {
      console.error("The request is not authenticated");

      dispatch(setAuthUserDataAC(
        27077,
        "savelyevresearch",
        "savelyevresearch@protonmail.com"
      ));
    }
  });
};

export default authReducer;
