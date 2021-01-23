import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Calender, NotFound, SignIn } from './pages'
import { AuthProvider } from './auth/AuthProvider'
import PrivateRoute from './auth/PrivateRoute'

const App = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Calender} />
        <Route exact path="/signin" component={SignIn} />
        <PrivateRoute component={NotFound} />
      </Switch>
    </Router>
  </AuthProvider>
)
export default App
