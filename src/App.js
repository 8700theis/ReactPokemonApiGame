import './components/css/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import Pick from './components/Pick';
import Fight from './components/Fight';

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Welcome />
          </Route>
          <Route path='/pick'>
            <Pick />
          </Route>
          <Route path='/fight'>
            <Fight />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
