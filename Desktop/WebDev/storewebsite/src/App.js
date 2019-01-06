import React, { Component } from 'react';

import Menu from './pages/Menu';

import Contact from './pages/Contact';

import Home from './pages/Home';

import About from './pages/About';

import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router , Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     <Router>
     <div>
     <Route exact path = '/menu' component = {Menu} />
     <Route exact path = '/contact' component = {Contact}  />
     <Route exact path = '/' component = {Home} />
     <Route exact path = '/about' component = {About} />
     </div>
     </Router>
   );
  }
}

export default App;
