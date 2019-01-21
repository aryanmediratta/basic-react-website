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
  textAlign : 'center',
  fontFamily : 'Times',
  fontSize : '20px'
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
				
				<p style = {ps}>The traditional food of India has been widely appreciated for its fabulous use of herbs and spices. Indian cuisine is known for its large assortment of dishes. The cooking style varies from region to region and is largely divided into North Indian cuisine & South Indian  . At Delhi Grill we serve fresh, tasty and spicy Indian food prepared using fresh herbs, garam masalas which are roasted and made in-house combined with rich flavors from ginger and garlic. Mix of South Indian, North Indian & West Indian cuisine.</p>

				</div>

				<h2 style = {h2s}>Our Specialities </h2>

				 <div class="slider">
    <ul class="slides">
      <li>
        <img src={golgappa} style = {{height:'100%'}}/> 
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
      <li>
        <img src={dish}/> 
      </li>
      <li>
        <img src={kulfi}/> 
      </li>
      <li>
        <img src={chinese}/> 
      </li>
    </ul>
  </div>
  			<Footer />
			</div>	
			);
	}
}

export default Home