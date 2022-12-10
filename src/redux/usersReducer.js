import { bindActionCreators } from "redux";

const usersState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }

          return user;
        }),
      };
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }

          return user;
        }),
      };
    case "SET-USERS":
      return {
        ...state,
        users: [...action.users],
      };
    case "SET-CURRENT-PAGE":
      return {
        ...state,
        currentPage: action.currentPage,
      }
    case "SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });

export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });

export const setUsersAC = (users) => ({ type: "SET-USERS", users });

export const setCurrentPageAC = (currentPage) => ({ type: "SET-CURRENT-PAGE", currentPage });

export const setTotalUsersCountAC = (totalUsersCount) => ({ type: "SET-TOTAL-USERS-COUNT", totalUsersCount });

export default usersReducer;
