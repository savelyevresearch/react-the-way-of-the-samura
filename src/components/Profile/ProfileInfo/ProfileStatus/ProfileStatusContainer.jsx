import React from "react";
import { connect } from "react-redux";
import { getUserStatusThunkCreator, updateUserStatusThunkCreator } from "../../../../redux/profileReducer";
import ProfileStatus from "./ProfileStatus";

class ProfileStatusContainer extends React.Component {
  componentDidMount() {
    this.props.getUserStatusThunkCreator();
  }

  render() {
    return <ProfileStatus {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.profileState.status,
  };
};

const ProfileStatusContainer = connect(mapStateToProps, {
  updateUserStatus: updateUserStatusThunkCreator,
  getUserStatus: getUserStatusThunkCreator,
})(ProfileStatusContainer);

export default ProfileStatusContainer;
