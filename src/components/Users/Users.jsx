import React from "react";

import usersStyleClasses from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "John Snow",
        status: "I am a boss",
        location: { city: "Winterfell", country: "The 7 Kingdoms" },
        followed: true,
        photoUrl:
          "https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png",
      },
      {
        id: 2,
        fullName: "Stanis Baratheon",
        status: "I am a king",
        location: { city: "Dragonstone", country: "The 7 Kingdoms" },
        followed: true,
        photoUrl:
          "https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png",
      },
      {
        id: 3,
        fullName: "Tyrion Lannister",
        status: "I am the smartest guy in the Westeros",
        location: { city: "The King's Landing", country: "The 7 Kingdoms" },
        followed: false,
        photoUrl:
          "https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png",
      },
      {
        id: 4,
        fullName: "Jaime Lannister",
        status: "I am the best swordman in the Westeros",
        location: { city: "The King's Landing", country: "The 7 Kingdoms" },
        followed: false,
        photoUrl:
          "https://cdn0.iconfinder.com/data/icons/avatar-15/512/ninja-512.png",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <div key={index}>
            <span>
              <div>
                <img
                  className={usersStyleClasses.userPhoto}
                  src={user.photoUrl}
                />
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
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>{user.location.country}</div>
                <div>{user.location.city}</div>
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
