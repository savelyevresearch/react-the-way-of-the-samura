import { stopSubmit } from "redux-form";
import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectHelpers";

const FOLLOW = "usersReducer/FOLLOW";
const UNFOLLOW = "usersReducer/UNFOLLOW";
const SET_USERS = "usersReducer/SET-USERS";
const SET_CURRENT_PAGE = "usersReducer/SET-CURRENT-PAGE";
const SET_TOTAL_USERS_COUNT = "usersReducer/SET-TOTAL-USERS-COUNT";
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS =
  "usersReducer/TOGGLE-FOLLOWING-IN-PROGRESS";

const usersState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = usersState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setCurrentPageAC = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const setTotalUsersCountAC = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount,
});

export const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const toggleFollowingInProgressAC = (isFetching, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const getUsersThunkCreator =
  (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));

    try {
      const responseData = await usersAPI.getUsers(currentPage, pageSize);

      dispatch(toggleIsFetchingAC(false));

      if (!responseData.error) {
        dispatch(setUsersAC(responseData.items));
        dispatch(setTotalUsersCountAC(responseData.totalCount));
      } else {
        console.log("The error property is equal to non-null value");
      }
    } catch (error) {
      console.error(`Something went wrong (request error): ${error.message}`);
    }
  };

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingInProgressAC(true, userId));

  try {
    const response = await apiMethod(userId);

    if (response.data.resultCode === 0) {
      dispatch(actionCreator(userId));
    } else {
      console.log("The resultCode property is equal to 1");
    }

    dispatch(toggleFollowingInProgressAC(false, userId));
  } catch (error) {
    console.error(`Something went wrong (request error): ${error.message}`);
  }
};

export const followThunkCreator = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.follow.bind(usersAPI),
    followAC
  );
};

export const unfollowThunkCreator = (userId) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userId,
    usersAPI.unfollow.bind(usersAPI),
    unfollowAC
  );
};

export default usersReducer;
