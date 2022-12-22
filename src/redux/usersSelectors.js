import { createSelector } from "reselect";

const getUsersSelector = (state) => {
  return state.usersState.users;
};

export const getUsers = createSelector(getUsersSelector, (users) => {
  return users.filter((user) => true);
});

export const getPageSize = (state) => {
  return state.usersState.pageSize;
};

export const getTotalUsersCount = (state) => {
  return state.usersState.totalUsersCount;
};

export const getCurrentPage = (state) => {
  return state.usersState.currentPage;
};

export const getIsFetching = (state) => {
  return state.usersState.isFetching;
};

export const getFollowingInProgress = (state) => {
  return state.usersState.followingInProgress;
};
