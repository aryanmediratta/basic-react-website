import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import menu2 from '../images/menu2.jpeg';
import menu1 from '../images/menu1.jpeg';

import M from 'materialize-css/dist/js/materialize.min.js';

const stylo = {
	width : '100%',
	height : '50%',
}

const h2s = {
	textAlign : 'center',
	fontFamily : 'Times',
}

class Menu extends Component {

	componentDidMount(){

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

	}


	render(){
		return(
			<div>
			<Header/>
			<div class = 'container'>
			<h2 style = {h2s}> Our Delicate Menu </h2>
			<img src ={menu2} style ={stylo} class='materialboxed'/>
			<br />
			<br />
			<img src ={menu1} style ={stylo} class ='materialboxed'/>
			<br/>
			<br/>
			</div>
			<Footer/>
			</div>
			)
	}
}

export default Menu;