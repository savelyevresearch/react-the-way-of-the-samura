import React from "react";
import { NavLink } from "react-router-dom";

import headerStyleClasses from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={headerStyleClasses.header}>
      <img
        className={headerStyleClasses.logoImage}
        src="https://logos-download.com/wp-content/uploads/2018/02/Carolina_Panthers_logo_blue.png"
        alt="logo"
      />
      <div className={headerStyleClasses.loginBlock}>
        {props.isAuth
          ? <NavLink to={`/profile/${props.userId}`}>{props.login}</NavLink>
          : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
