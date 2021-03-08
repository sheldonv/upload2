import logo from './logo.svg';
import './App.css';
import Movies from './movies/pages/Movies';
import {BrowserRouter as Router, Switch, Redirect, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Movies />
        </Route> 
      </Switch>
    </Router>
  );
}

export default App;
