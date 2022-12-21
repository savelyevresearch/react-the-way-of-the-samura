import React from "react";
import { NavLink } from "react-router-dom";

import headerStyleClasses from "./Header.module.css";

const Header = (props) => {
  console.log(props.userId);

  return (
    <header className={headerStyleClasses.header}>
      <img
        className={headerStyleClasses.logoImage}
        src="https://logos-download.com/wp-content/uploads/2018/02/Carolina_Panthers_logo_blue.png"
        alt="logo"
      />
      <div className={headerStyleClasses.loginBlock}>
        {props.isAuth ? (
          <div className={headerStyleClasses.authSection}>
            <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink> | <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
