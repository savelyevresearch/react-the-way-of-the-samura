import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator,
} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";
import withRouter from "../../hoc/withRouter";

class ProfileAPI extends React.Component {
  refreshProfile() {
    let userId = this.props.router.params.userId;

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.router.params.userId != this.props.router.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        isOwner={this.props.router.params.userId == this.props.authorizedUserId}
        status={this.props.status}
        getUserStatus={this.props.getUserStatus}
        updateUserStatus={this.props.updateUserStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profileState.profileInfoState,
    status: state.profileState.status,
    authorizedUserId: state.authState.userId,
    isAuth: state.authState.isAuth,
  };
};

const ProfileContainer = compose(
  connect(mapStateToProps, {
    getProfile: getProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveProfile: saveProfileThunkCreator,
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPI);

export default ProfileContainer;
