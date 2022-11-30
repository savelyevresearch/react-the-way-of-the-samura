import React from "react";

import navbarStyleClasses from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbarStyleClasses.nav}>
      <div className={navbarStyleClasses.item}>
        <a>Profile</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a>Messages</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a>News</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a>Music</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
