import React, { Component } from 'react';

import Header from '../components/Header'

import Footer from '../components/Footer'

import allmenu from '../images/allmenu.jpeg';
import chinese from '../images/chinese.jpeg';
import rice from '../images/rice.jpeg';
import paneer from '../images/paneer.jpeg';
import laddoo from '../images/laddoo.jpeg';
import kulfi from '../images/kulfi.jpeg';
import kebab from '../images/kebab.jpeg';
import golgappa from '../images/golgappa.jpeg';
import dish from '../images/dish.jpeg';
import delhigrill from '../images/delhigrill.jpeg';

import M from 'materialize-css/dist/js/materialize.min.js';

const h2s = {
	textAlign : 'center',
	fontFamily : 'Times',
}

const ps = {
	color : 'black',
}

class Home extends Component {

	componentDidMount(){
  	document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {'indicators' : true, 'interval': 1500});
  });

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

	}

	render(){
		return(	
			<div>
				<Header/>
				<h2 style ={h2s}> This is the homepage </h2>

				<div class="parallax-container">
      <div class="parallax"><img src={allmenu}/></div>
    </div>

				<div className = "container">
				
				<p style = {h2s}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

				</div>

				<h2 style = {h2s}>Our Specialities </h2>

				 <div class="slider">
    <ul class="slides">
      <li>
        <img src={golgappa}/> 
      </li>
      <li>
        <img src={kebab}/> 
      </li>
      <li>
        <img src={rice}/> 
      </li>
      <li>
        <img src={paneer}/> 
      </li>
    </ul>
  </div>

  			<Footer />
			</div>	
			);
	}
}

export default Home