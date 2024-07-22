import './App.css';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'




function App() {


  return (
    <Router>
      <div className="App">

        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route  path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
