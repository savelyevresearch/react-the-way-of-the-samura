import React from "react";
import { connect } from "react-redux";

import {
  followAC,
  setUsersAC,
  unfollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  toggleIsFetchingAC,
  toggleFollowingInProgressAC,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../redux/usersReducer";

import Users from "./Users";

import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageNumberChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);

    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageNumberChange={this.onPageNumberChange}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          toggleFollowingInProgress={this.props.toggleFollowingInProgress}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    currentPage: state.usersState.currentPage,
    isFetching: state.usersState.isFetching,
    followingInProgress: state.usersState.followingInProgress,
  };
};

const UsersContainer = compose(
  connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    toggleIsFetching: toggleIsFetchingAC,
    toggleFollowingInProgress: toggleFollowingInProgressAC,
    getUsers: getUsersThunkCreator,
  }),
  withAuthRedirect
)(UsersAPIComponent);

export default UsersContainer;
