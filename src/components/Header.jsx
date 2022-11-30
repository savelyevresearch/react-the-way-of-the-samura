import React from "react";

import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        className={classes.logoImage}
        src="https://logos-download.com/wp-content/uploads/2018/02/Carolina_Panthers_logo_blue.png"
        alt="logo"
      />
    </header>
  );
};

export default Header;
