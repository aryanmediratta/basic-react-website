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
			<div className = "row">
			<div className = "col s12 m6 l6">
			<a className="waves-effect waves-light btn black-text text-lighten-4 cyan lighten-2" href="tel:60169560954" target="_blank" style = {{fontSize : '1em'}}><i class="small material-icons left">phone</i>60169560954</a>
			</div>
			<div className = "col s12 m6 l6">
			<div class = "hide-on-med-and-up">
			<br/>
			</div>
			<a className="waves-effect waves-light btn black-text text-lighten-4 cyan lighten-2" href="https://api.whatsapp.com/send?phone=60169560954" target="_blank" rel="noopener noreferrer" style = {{fontSize : '1em'}}><i class="small material-icons left">message</i>WhatsApp</a>
			</div>
			</div>
			<div className = "row">
			<div className = "col s12 m6 l6">
			<a className="waves-effect waves-light btn black-text text-lighten-4 cyan lighten-2" href="mailto:info@delhigrillkl.com" target="_blank" rel="noopener noreferrer"><i class="material-icons left" style = {{fontSize : '1.5em'}}>email</i>info@delhigrillkl.com</a>
			</div>
			<div className = "col s12 m6 l6">
			<div class = "hide-on-med-and-up">
			<br/>
			</div>
			<a className="waves-effect waves-light btn black-text text-lighten-4 cyan lighten-2" href = "https://www.foodpanda.my/restaurant/m7ah/delhi-grill-brickfield" target = "_blank" rel="noopener noreferrer" style = {{fontSize : '1em'}}>Order From Us on Foodpanda! </a>
			</div>
			</div>
			<Footer />
			</div>
			)
	}
}

export default Contact;