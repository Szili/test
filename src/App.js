import React, { useState } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import Users from "./components/Users";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(window.sessionStorage.getItem("user"));

  return (
    <Router>
      <div className="App">
        <Header user={user} setUser={setUser} />

        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              user ? <Redirect to="/homepage" /> : <Login setUser={setUser} />
            }
          />
          <Route
            exact
            path="/homepage"
            render={() => <Homepage user={user} />}
          />
          <Route path="/users" component={Users} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
