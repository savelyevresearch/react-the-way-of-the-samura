import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import axios from "axios";
import { setUserProfileAC } from "../../redux/profileReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";

class ProfileAPI extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;

    console.log(userId);

    if (!userId) {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    } else {
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then((response) => {
          this.props.setUserProfile(response.data);
        });
    }
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

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

const WithUrlDataContainerComponent = withRouter(ProfileAPI);

const ProfileContainer = connect(mapStateToProps, {
  setUserProfile: setUserProfileAC,
})(WithUrlDataContainerComponent);

export default ProfileContainer;
