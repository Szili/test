import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router";

const Header = ({ user, setUser, ...props }) => {
  const { history } = props;

  const clearSession = () => {
    console.log("history: ", history);
    setUser("");
    sessionStorage.clear();
    history.replace(`/`);
  };

  return (
    <>
      {user && (
        <header>
          <div className="user">
            <NavLink to="/homepage">Home</NavLink>
          </div>
          <div>{user}</div>
          <div className="user-link-logout">
            <NavLink to="/users">User Logged Times</NavLink>
            <div className="logout">
              <i className="fas fa-sign-out-alt" onClick={clearSession}></i>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default withRouter(Header);
