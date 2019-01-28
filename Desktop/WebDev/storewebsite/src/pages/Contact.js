import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import Map from '../components/Map';

const h2s = {
	textAlign : 'center',
	fontFamily : 'Open Sans',
	fontWeight : 'bold'
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
			<div className = "col s12 m6 l6">
			<a className="btn-flat black-text text-lighten-4" href="tel:60169560954" target="_blank"><i class="small material-icons left">phone</i>60169560954</a>
			</div>
			<div className = "col s12 m6 l6">
			<a className="btn-flat black-text text-lighten-4 right-align" href="https://api.whatsapp.com/send?phone=60169560954" target="_blank" rel="noopener noreferrer"><i class="small material-icons left">message</i>WhatsApp</a>
			</div>
			</div>
			<div className = "row">
			<div className = "col s12 m6 l6">
			<a className="black-text text-lighten-4" href="mailto:info@delhigrillkl.com" target="_blank" rel="noopener noreferrer"><i class="material-icons left">email</i>info@delhigrillkl.com</a>
			</div>
			<div className = "col s12 m6 l6">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<div class = "hide-on-med-and-up">
			<br/>
			</div>
			<a className="black-text text-lighten-4 right-align" href = "https://www.foodpanda.my/restaurant/m7ah/delhi-grill-brickfield" target = "_blank" rel="noopener noreferrer">Order From Us on Foodpanda! </a>
			</div>
			</div>
			</div>
			<Footer />
			</div>
			)
	}
}

export default Contact;