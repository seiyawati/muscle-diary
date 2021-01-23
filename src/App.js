import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from 'react-router-dom'
import { Calender, NotFound, Home } from './pages'

// const Home = () => (
//   <article>
//     <h1>
//       <Link to="/">Home</Link>
//     </h1>
//     <Link to="/calender">this is calender</Link>
//   </article>
// )

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calender" component={Calender} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
export default App
