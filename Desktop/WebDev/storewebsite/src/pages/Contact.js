import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import Map from '../components/Map';

const h2s = {
	textAlign : 'center',
	fontFamily : 'Garamond',
}

const h1s = {
	fontFamily : 'Garamond',
}

class Contact extends Component {
	
	render(){
		return(
			<div>
			<Header/>
			<h2 style = {h2s}> Contact Us  </h2>
			<div className = "container">
			<p style = {h1s}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			<div className = "row">
        	<div className="col s12 m1 l2"></div>
        	<div className = "col s12 m10 l8">
			<div style={{width: '100%', height: '400px'}}>
			<Map />
			</div>
			</div>
			<div className="col s12 m1 l2"></div>
			</div>
			<Footer />
			</div>
			)
	}
}

export default Contact;