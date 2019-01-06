import React, {Component, Fragment} from 'react';

class Header extends Component {
	
	render(){

		return(
		

			<Fragment>
			<nav>
    <div class="nav-wrapper">
      <a href = '/' class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href='/menu'>Menu</a></li>
        <li><a href='/about'>About Us</a></li>
        <li><a href='/contact'>Contact Us</a></li>
      </ul>
    </div>
  </nav>
 
			</Fragment>

			)
	}
}



export default Header;


