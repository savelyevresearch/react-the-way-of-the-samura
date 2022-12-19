import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
} from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/AuthRedirect";
import { compose } from "redux";

class ProfileAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

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
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

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
