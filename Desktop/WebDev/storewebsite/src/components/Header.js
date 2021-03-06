import React, {Component, Fragment} from 'react';
import logo1 from '../images/logo.jpg';

import M from 'materialize-css/dist/js/materialize.min.js';

const ps = { 
  fontSize : '20px'
}
//<img src = {logo1} alt = "Logo!" class="responsive-img"/>
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
      <div class="navbar-fixed">
       <nav>
          <div className="nav-wrapper blue-grey darken-3" >
            <a href="/" className="brand-logo cyan-text text-lighten-4 left">    Delhi Grill        </a>
            <a href="#" data-target="mobile-demo" className="right sidenav-trigger cyan-text text-lighten-4" ><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down" >
              <li><a href="/" className="cyan-text text-lighten-4" style = {ps}>Home</a></li>
              <li><a href="/menu" className="cyan-text text-lighten-4" style = {ps}>Menu</a></li>
              <li><a href="/contact" className="cyan-text text-lighten-4" style = {ps}>Contact Us</a></li>
            </ul>
          </div>
        </nav>
        </div>

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




