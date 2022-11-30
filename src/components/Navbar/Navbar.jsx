import React from "react";

import navbarStyleClasses from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={navbarStyleClasses.nav}>
      <div className={navbarStyleClasses.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a href="/dialogs">Messages</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a href="/news">News</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a href="/music">Music</a>
      </div>
      <div className={navbarStyleClasses.item}>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
