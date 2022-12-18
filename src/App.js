import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import MovieDetails from './comps/MovieDetails';
import Navbar from './comps/Navbar';
import NotFound from './comps/NotFound';




function App() {

  return (
    <Router>
      <div className="container-fluid movie-app">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/movieDetails/:id">
              <MovieDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );

}

export default App;
