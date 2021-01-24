import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Calender, NotFound, SignIn } from './pages'
import { AuthProvider } from './auth/AuthProvider'
import PrivateRoute from './auth/PrivateRoute'
import { ThemeProvider } from '@material-ui/core/styles'
import { default as theme } from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path="/" component={Calender} />
          <Route exact path="/signin" component={SignIn} />
          <PrivateRoute component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  </ThemeProvider>
)
export default App
