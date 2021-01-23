import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Calender, NotFound, Home } from './pages'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/calender" component={Calender} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
export default App
