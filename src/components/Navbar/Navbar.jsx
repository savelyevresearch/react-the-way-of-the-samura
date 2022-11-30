import React from "react";
import { NavLink } from "react-router-dom";

import navbarStyleClasses from "./Navbar.module.css";

const Navbar = () => {
  console.log(navbarStyleClasses);

  return (
    <nav className={navbarStyleClasses.nav}>
      <div className={navbarStyleClasses.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? navbarStyleClasses.active : navbarStyleClasses.item}>Profile</NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink to="/dialogs" className={navData => navData.isActive ? navbarStyleClasses.active : navbarStyleClasses.item}>Messages</NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink to="/news" className={navData => navData.isActive ? navbarStyleClasses.active : navbarStyleClasses.item}>News</NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink to="/music" className={navData => navData.isActive ? navbarStyleClasses.active : navbarStyleClasses.item}>Music</NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? navbarStyleClasses.active : navbarStyleClasses.item}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
