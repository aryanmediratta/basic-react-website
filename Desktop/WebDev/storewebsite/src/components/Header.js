import React, {Component, Fragment} from 'react';
import logo1 from '../images/logo6.jpg';

import M from 'materialize-css/dist/js/materialize.min.js';

//        <li><a href="/about" className="cyan-text text-lighten-4">About Us</a></li>
//        <li><a href="/about">About Us</a></li>

class Header extends Component {
	
componentDidMount(){

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

			}

	render(){

		return(
		
			
			<Fragment>
			 <nav>
    <div className="nav-wrapper blue-grey darken-3" >
      <a href="/" className="brand-logo cyan-text text-lighten-4">
      <img src = {logo1} class="responsive-img"/>
      </a>
      <a href="#" data-target="mobile-demo" className="right sidenav-trigger cyan-text text-lighten-4" ><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down" >
        <li><a href="/menu" className="cyan-text text-lighten-4">Menu</a></li>
        <li><a href="/contact" className="cyan-text text-lighten-4">Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <ul className = "sidenav" id="mobile-demo">
    <li><a href = "/">Home</a></li>
        <li><a href = "/menu">Menu</a></li>
        <li><a href = "/contact">Contact Us</a></li>
  </ul>
			</Fragment>

			)
	}
}



export default Header;


