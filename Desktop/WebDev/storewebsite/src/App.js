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
     <Route path = '/' component = {Home} />
     <Route path = '/menu' component = {Menu} />
     <Route path = '/contact' component = {Contact}  />
     <Route path = '/about' component = {About} />
     </div>
     </Router>
   );
  }
}

export default App;
