import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
} from "../../redux/profileReducer";
import withAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";
import withRouter from "../../hoc/withRouter";

class ProfileAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    console.log(`userId before condition: ${userId}`);

    if (!userId) {
      userId = this.props.authorizedUserId;

      if (!userId) {
        this.props.history.push("/login");
      }
    }

    console.log(`userId after condition: ${userId}`);

    this.props.getProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.status}
        getUserStatus={this.props.getUserStatus}
        updateUserStatus={this.props.updateUserStatus}
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
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPI);

export default ProfileContainer;
