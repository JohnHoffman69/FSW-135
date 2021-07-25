import React, { useContext } from 'react';
import Login from './components/Login'
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from './context/UserProvider';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Feed from './components/Feed'



function App() {
  const {token} = useContext(UserContext)
  return (
    <div id="app">
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() => token ? <Redirect to="/profile"/> : <Login />}
        />
        <ProtectedRoute
          path="/profile"
          component={Profile}
          redirectTo="/"
          token={token}   
        />
        <ProtectedRoute
          path="/feed"
          component={Feed}
          redirectTo="/"
          token={token}
        />
      </Switch>
    </div>
  );
}

export default App;
