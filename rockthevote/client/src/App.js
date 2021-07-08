import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Body/Profile/Main"
import Login from "./components/Entry/Login/Login"
import Auth from "./components/Entry/Auth"
import Registration from "./components/Entry/Registration/Registration"
// import Profile from "./components/Profile/Profile"
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Auth/>}/>
          <Route path="/Main" render={() => <Main/>}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;