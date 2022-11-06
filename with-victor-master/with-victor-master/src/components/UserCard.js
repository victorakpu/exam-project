import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="usercard-container">
      <div className="usercard">
        <img src={user.picture.large} />
        <div className="card-info">
          <div>{`${user.name.first} ${user.name.last}`}</div>

          <p>{`${user.location.city}, ${user.location.country}`} </p>
          <p>{user.dob.age}</p>
          <p>{user.nat} </p>
          <p>{user.gender} </p>
        </div>
      </div>
      <div className="card-action">
        <button> View Contact</button>
      </div>
    </div>
  );
};

export default UserCard;
