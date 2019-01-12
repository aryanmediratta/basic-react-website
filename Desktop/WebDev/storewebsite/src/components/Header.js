import React, {Component, Fragment} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

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
    <div class="nav-wrapper">
      <a href="/" class="brand-logo">Delhi Grill</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><a href="/">Home</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
  </ul>
			</Fragment>

			)
	}
}



export default Header;


