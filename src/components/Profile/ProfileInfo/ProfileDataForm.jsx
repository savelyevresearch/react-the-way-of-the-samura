import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  TextArea,
} from "../../common/FormControls/FormControls";

import profileInfoStyleClasses from "./ProfileInfo.module.css";
import formControlsStyleClasses from "../../common/FormControls/FormControls.module.css";

const ProfileDataForm = ({ handleSubmit, profileInfo, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>Save</button>
      </div>
      {error && (
        <div className={formControlsStyleClasses.summaryError}>
          <span>{error}</span>
        </div>
      )}
      <div>
        <b>Full name</b>: {createField("Full name...", "fullName", null, Input)}
      </div>
      <div>
        <b>Looking for a job</b>:{" "}
        {createField("", "lookingForAJob", null, Input, "checkbox")}
      </div>
      <div>
        <b>My professional skills</b>:{" "}
        {createField(
          "My professional skills...",
          "lookingForAJobDescription",
          null,
          TextArea,
          "text"
        )}
      </div>
      <div>
        <b>About me</b>:{" "}
        {createField(
          "Tell about yourself...",
          "aboutMe",
          null,
          TextArea,
          "text"
        )}
      </div>
      <div>
        <b>Contacts</b>:{" "}
        {Object.keys(profileInfo.contacts).map((key) => (
          <div key={key} className={profileInfoStyleClasses.contact}>
            <b>
              {key}: {createField(key, `contacts.${key}`, null, Input)}
            </b>
          </div>
        ))}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({
  form: "editProfile",
})(ProfileDataForm);

export default ProfileDataFormReduxForm;
