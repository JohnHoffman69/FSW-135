import React, { useContext } from 'react'
import Login from './components/Authorization/Login'
import Navbar from './components/Page/Navbar'
import Profile from './components/Page/Profile'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Campaign from './components/Page/Campaign'
import { UserContext } from './context/UserProvider'
import './index.css'
import { Switch, Route, Redirect } from 'react-router-dom'

const App = ()=>  {
  const { token } = useContext(UserContext)
  return (
    <div id='app'>
      <Navbar />
      <Switch>
        <Route
          exact path='/'
          render={() => token ? <Redirect to='/profile' /> : <Login />}
        />
        <ProtectedRoute
          path='/profile'
          component={Profile}
          redirectTo="/"
          token={token}
        />
        <ProtectedRoute 
          path="/campaign"
          component={Campaign}
          redirectTo="/"
          token={token}
        />    
      </Switch>
    </div>
  );
}

export default App;
