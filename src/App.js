import React from 'react'
import SignUp from './components/Authentication/Signup'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Profile from './components/Authentication/Profile'
import Login from './components/Authentication/Login'
import PrivateRoute from './components/Authentication/PrivateRoute'
import ForgetPw from './components/Authentication/ForgetPw'
import Dashboard from './components/OnlineStorage/Dashboard'

function App() {
  return (
    <div className="Container">
      <BrowserRouter>
      <AuthProvider>
        <Switch>
          {/* Online storage */}
          <PrivateRoute exact path="/" component = {Dashboard}/>
          <PrivateRoute exact path= "/folder/:folderId" component = {Dashboard}/>
          {/* User information */}
          <PrivateRoute path="/user" component = {Profile}/>
          {/* Authentication */}
          <Route path="/signup" component = {SignUp} />
          <Route path="/login" component = {Login} />
          <Route path="/forgetpw" component = {ForgetPw} />
        </Switch>
      </AuthProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App;
