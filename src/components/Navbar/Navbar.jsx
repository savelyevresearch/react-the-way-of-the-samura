import React from "react";
import { NavLink } from "react-router-dom";

import navbarStyleClasses from "./Navbar.module.css";

import FriendItem from "./FriendItem/FriendItem";

const Navbar = (props) => {
  return (
    <nav className={navbarStyleClasses.nav}>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to={props.isAuth ? `/profile/${props.userId}` : "/login"}
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          Settings
        </NavLink>
      </div>
      <div className={navbarStyleClasses.item}>
        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive
              ? navbarStyleClasses.active
              : navbarStyleClasses.item
          }
        >
          Users
        </NavLink>
      </div>
      <div className={navbarStyleClasses.friendsBlock}>
        {props.friends.map((friendItem, index) => (
          <FriendItem
            key={index}
            friendAvatarUrl={friendItem.friendAvatarUrl}
            friendAvatarAlt={friendItem.friendAvatarAlt}
            friendFirstName={friendItem.friendFirstName}
          />
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
