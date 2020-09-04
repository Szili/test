import React, { useState } from "react";
import { withRouter } from "react-router";

const Login = (props) => {
  const [user, setUser] = useState("");
  const { history } = props;

  const onLoginUser = (e) => {
    e.preventDefault();
    window.sessionStorage.setItem("user", user);
    props.setUser(user);
    history.push(`/homepage`);
  };

  const onInputChange = (val) => {
    setUser(val);
  };

  return (
    <div className="login-container">
      <div className="login">
        <form onSubmit={onLoginUser}>
          <input
            type="text"
            placeholder="Username"
            value={user}
            onChange={(e) => onInputChange(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default withRouter(Login);
