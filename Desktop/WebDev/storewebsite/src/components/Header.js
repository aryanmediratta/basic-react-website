import React, {Component, Fragment} from 'react';

import M from 'materialize-css/dist/js/materialize.min.js';

const As = {
  color:'white', 
  fontFamily : 'Times', 
  fontSize : '17px'
}

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
    <div className="nav-wrapper grey darken-2" >
      <a href="/" className="brand-logo" style={{color:'white',fontFamily : 'Times'}}>Delhi Grill</a>
      <a href="#" data-target="mobile-demo" className="sidenav-trigger" style={{color:'white'}}><i className="material-icons">menu</i></a>
      <ul className="right hide-on-med-and-down" >
        <li><a href="/menu" style={As}>Menu</a></li>
        <li><a href="/about" style={As}>About Us</a></li>
        <li><a href="/contact" style={As}>Contact Us</a></li>
      </ul>
    </div>
  </nav>

  <ul className="sidenav" id="mobile-demo">
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


