import React from "react";

import usersStyleClasses from "./Users.module.css";

import userPhoto from "../../assets/imgs/userAvatar.png";
import { NavLink } from "react-router-dom";

import axios from "axios";

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
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      props.toggleFollowingInProgress(true, user.id);


                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "25b29e35-7d3f-4e4f-aa8c-4c33ae4a48c7",
                            },
                          }
                        )
                        .then((response) => {
                          console.log("The request is authenticated");

                          if (response.data.resultCode === 0) {
                            console.log(
                              "The new state will be integrated for authenticated user"
                            );

                            props.unfollow(user.id);
                          } else {
                            console.log(
                              "The new state will be integrated for unauthenticated user"
                            );

                            props.unfollow(user.id);
                          }

                          props.toggleFollowingInProgress(false, user.id);
                        })
                        .catch((error) => {
                          console.error(
                            "A request error has been appeared, but the new state wiil be integrated"
                          );

                          props.unfollow(user.id);
                          props.toggleFollowingInProgress(false, user.id);
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    disabled={props.followingInProgress.some(id => id === user.id)}
                    onClick={() => {

                      props.toggleFollowingInProgress(true, user.id);

                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          { withCredentials: true }
                        )
                        .then((response) => {
                          console.log("The request is authorized");

                          if (response.data.resultCode === 0) {
                            console.log(
                              "The new state will be integrated for authenticated user"
                            );

                            props.follow(user.id);
                          } else {
                            console.log(
                              "The new state will be integrated for unauthenticated user"
                            );

                            props.follow(user.id);
                          }

                          props.toggleFollowingInProgress(false, user.id);
                        })
                        .catch((error) => {
                          console.error(
                            "A request error has been appeared, but the new state wiil be integrated"
                          );

                          props.follow(user.id);
                          props.toggleFollowingInProgress(false, user.id);
                        });
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
