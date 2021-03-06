import React from "react";

const Users = () => {
  const userList = localStorage.getItem("users") || [];

  const convertTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return (
      <>
        <span>{hours}h </span>
        <span>{minutes}m</span>
      </>
    );
  };

  return (
    <div className="loged-time-container">
      <div className="header">
        <div>Name</div>
        <div>Date</div>
        <div>Time</div>
      </div>
      {userList.length > 0 ? (
        JSON.parse(userList).map((item, index) => {
          return (
            <div className="entry" key={index + item.time}>
              <div>{item.user}</div>
              <div>{item.date}</div>
              <div>{convertTime(item.time)}</div>
            </div>
          );
        })
      ) : (
        <p>There are no recorded times.</p>
      )}
    </div>
  );
};

export default Users;
