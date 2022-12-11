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

export default authReducer;
