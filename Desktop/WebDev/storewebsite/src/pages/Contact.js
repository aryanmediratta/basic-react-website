import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import Map from '../components/Map';

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
			<br/>
			<br/>
			<br/>
			<br/>			<br/>
			<br/>			<br/>
			<br/>			<br/>
			<br/>
			</div>
			</div>
			<div className="col s12 m1 l2"></div>
			</div>
			<div className = "container"> 
			<a className="btn-flat black-text text-lighten-4" href="tel:60169560954" target="_blank"><i class="material-icons left">phone</i>60169560954</a>
			<a className="btn-flat black-text text-lighten-4" href="https://api.whatsapp.com/send?phone=60169560954" target="_blank"><i class="material-icons left">message</i>WhatsApp</a>
			<a className="btn-flat black-text text-lighten-4" href="mailto:info@delhigrillkl.com" target="_blank"><i class="material-icons left">email</i>info@delhigrillkl.com</a>
			<br/>
			<a className="btn-flat black-text text-lighten-4" href = "https://www.foodpanda.my/restaurant/m7ah/delhi-grill-brickfield" target = "_blank">Order From Us on Foodpanda! </a>
			</div>
			<Footer />
			</div>
			)
	}
}

export default Contact;