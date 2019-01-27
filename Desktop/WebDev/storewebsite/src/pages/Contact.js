import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import Map from '../components/Map';

import { SocialIcon } from 'react-social-icons';

const h2s = {
	textAlign : 'center',
	fontFamily : 'Open Sans',
	fontWeight : 'bold'
}

const h1s = {
	fontFamily : 'Open Sans',
}

class Contact extends Component {
	
	render(){
		return(
			<div>
			<Header/>
			<h2 style = {h2s}> Contact Us  </h2>
			<div className = "row">
        	<div className="col s12 m1 l2"></div>
        	<div className = "col s12 m10 l8">
			<div style={{width: '100%', height: '400px'}}>
			<Map />
			</div>
			</div>
			<div className="col s12 m1 l2"></div>
			</div>
			<br/>		
			<div className = "container"> 
			<div className = "row">
			<div className = "col s12 m6 4">
			<a className="btn-flat black-text text-lighten-4" href="tel:60169560954" target="_blank"><i class="small material-icons left">phone</i>60169560954</a>
			</div>
			<div className = "col s12 m6 4">
			<a className="btn-flat black-text text-lighten-4" href="https://api.whatsapp.com/send?phone=60169560954" target="_blank"><i class="small material-icons left">message</i>WhatsApp</a>
			</div>
			</div>
			<div className = "row">
			<div className = "col s12 m6 4">
			<SocialIcon url="mailto:info@delhigrillkl.com" target="_blank" network = "email" style={{ height: 25, width: 25 }} /> info@delhigrillkl.com 
			</div>
			<div className = "col s12 m6 4">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a className="black-text text-lighten-4" href = "https://www.foodpanda.my/restaurant/m7ah/delhi-grill-brickfield" target = "_blank">Order From Us on Foodpanda! </a>
			</div>
			</div>
			</div>
			<Footer />
			</div>
			)
	}
}

export default Contact;