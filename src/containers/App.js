import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';

// This component already contains a Router wrapper where we'll include our particular routes. App should render our Navbar and 4 React Router Route components with paths to /, /movies, /directors & /actors and has a props of the corresponding component. When a user visits the root url, they should see the Home component. Since a Router wrapper can only wrap one element, use a div to wrap the Navbar and routes. This allows us to apply a CSS class at the App component level.

const App = (props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route exact path='/actors' component={Actors} />
        <Route exact path='/directors' component={Directors} />
        <Route exact path='/movies' component={Movies} />
      </div>
    </Router>
  );
};

export default App
