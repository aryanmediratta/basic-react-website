import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

const h2s = {
	textAlign : 'center',
	fontFamily : 'Garamond',
}

const h1s = {
	fontFamily : 'Garamond',
}

class About extends Component {

	render(){
		return(
			<div>
			<Header/>
			<h2 style = {h2s}> About Us </h2>
			<div className = "container">
			<p style = {h1s}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  			</div>
  			<Footer />
  			</div>
			)
	}
}

export default About;