import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";

const usersState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  fake: 10,
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
      };
    case "SET-TOTAL-USERS-COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case "TOGGLE-IS-FETCHING":
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case "TOGGLE-FOLLOWING-IN-PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case "FAKE":
      return {
        ...state,
        fake: state.fake + 1,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: "FOLLOW", userId });

export const unfollowAC = (userId) => ({ type: "UNFOLLOW", userId });

export const setUsersAC = (users) => ({ type: "SET-USERS", users });

export const setCurrentPageAC = (currentPage) => ({
  type: "SET-CURRENT-PAGE",
  currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: "SET-TOTAL-USERS-COUNT",
  totalUsersCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: "TOGGLE-IS-FETCHING",
  isFetching,
});

export const toggleFollowingInProgressAC = (isFetching, userId) => ({
  type: "TOGGLE-FOLLOWING-IN-PROGRESS",
  isFetching,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));

  usersAPI
    .getUsers(currentPage, pageSize)
    .then((data) => {
      dispatch(toggleIsFetchingAC(false));

      if (!data.error) {
        dispatch(setUsersAC(data.items));
        dispatch(setTotalUsersCountAC(data.totalCount));
      } else {
        console.log("The error property is equal to non-null value");
      }
    })
    .catch((error) => {
      console.error(`Some went wrong (request error): ${error.message}`);
    });
};

export const followThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgressAC(true, userId));

  usersAPI
    .follow(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(followAC(userId));
      } else {
        console.log("The resultCode property is equal to 1");
      }

      dispatch(toggleFollowingInProgressAC(false, userId));
    })
    .catch((error) => {
      console.error(`Some went wrong (request error): ${error.message}`);
    });
};

export const unfollowThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgressAC(true, userId));

  usersAPI
    .unfollow(userId)
    .then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(unfollowAC(userId));
      } else {
        console.log("The resultCode property is equal to 1");
      }

      dispatch(toggleFollowingInProgressAC(false, userId));
    })
    .catch((error) => {
      console.error(`Some went wrong (request error): ${error.message}`);
    });
};

export default usersReducer;
