import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfileAC } from "../../redux/profileReducer";

class ProfileAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then((response) => {
        this.props.setUserProfile(response.data);

        console.log(this.props.profileInfo);
      });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profileInfo: state.profileState.profileInfoState,
  };
};

const ProfileContainer = connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
})(ProfileAPI);

export default ProfileContainer;
