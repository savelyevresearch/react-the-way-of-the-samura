import React from "react";

import usersStyleClasses from "./Users.module.css";

import userPhoto from "../../assets/imgs/userAvatar.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div>
        {pageNumbers.slice(0, 5).map((pageNumber) => (
          <span
            className={`
                ${
                  props.currentPage === pageNumber
                    ? usersStyleClasses.selectedPage
                    : ""
                } 
              ${usersStyleClasses.pageNumber}`}
            key={pageNumber}
            onClick={() => {
              props.onPageNumberChange(pageNumber);
            }}
          >
            {pageNumber}
          </span>
        ))}
      </div>
      {props.users.map((user, index) => {
        return (
          <div key={index}>
            <span>
              <div>
                <NavLink to={`/profile/${user.id}`}>
                  <img
                    className={usersStyleClasses.userPhoto}
                    src={
                      user.photos.small != null ? user.photos.small : userPhoto
                    }
                  />
                </NavLink>
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
