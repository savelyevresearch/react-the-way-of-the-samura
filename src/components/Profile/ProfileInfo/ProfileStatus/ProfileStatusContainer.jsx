import React from "react";
import { connect } from "react-redux";
import { updateUserStatusThunkCreator } from "../../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

class ProfileStatusContainer extends React.Component {
  render() {
    return <ProfileStatus {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.profileState.status,
  };
};

const ProfileStatusContainer = connect(mapStateToProps, {
  updateUserStatus: updateUserStatusThunkCreator,
})(ProfileStatusContainer);

export default ProfileStatusContainer;
