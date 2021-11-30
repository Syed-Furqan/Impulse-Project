import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Account from './Account';
import Accountmail from './Accountmail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Account/>
          </Route>
          <Route path="/page2">
            <Accountmail/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
