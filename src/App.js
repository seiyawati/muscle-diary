import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Calender, NotFound, Home } from './pages'

const Auth = (props) => <div>{props.children}</div>

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/signin" component={Home} />
      <Auth>
        <Switch>
          <Route exact path="/" component={Calender} />
          <Route component={NotFound} />
        </Switch>
      </Auth>
    </Switch>
  </Router>
)
export default App
