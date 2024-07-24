import './App.css';
import BlogListDetail from './BlogListDetail';
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
          <Route  path="/blogs/:id">
            <BlogListDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
