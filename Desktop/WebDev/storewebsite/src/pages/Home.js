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

import video from '../images/video1.mp4';

import M from 'materialize-css/dist/js/materialize.min.js';

const h2s = {
	textAlign : 'center',
	fontFamily : 'Open Sans',
  fontWeight : 'bold'
}

const ps = {
	color : 'black',
  textAlign : 'center',
  fontFamily : 'Open Sans',
  fontSize : '16px'
}

class Home extends Component {

	componentDidMount(){
  	document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {'indicators' : true, 'interval': 1600, 'height':400});
  });

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
  });

		document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });

    document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {dist : '-225'});
  });

    M.AutoInit();

	}

	render(){
		return(	
			<div>
				<Header/>
        <br/>
        <br/>
        <br/>

<img src={allmenu} alt = "menu" className="img-responsive"/>
      <br />
      <br />

				<div className = "container">
				
				<p class="flow-text" style = {ps}>The bustling streets and bazaars of Delhi are home to a concoction of traditions, community and food. At Delhi Grill we bring this beautiful festival of three under one roof. At Delhi Grill you will experience the richness of multi- cuisine food ranging from street food like Pani Puri which are little balls stuffed with the spicy aloo and dunked in tamarind water to Chicken & Mutton Biryani made from the recipes of Awadi Khatshamas (cooks) to finishing off your meal with Kulfi Faluda another popular street food dessert made with rich creamy milk, dry fruits and vermicelli.

Come and join us in this food journey and we will take you to a ride, through India’s rich food cultural experience.</p>

        <video class="responsive-video" controls>
        <source src={video} type="video/mp4"/>
        </video>

        </div>

        <div class = "hide-on-small-only">
				<h2 style = {h2s}>Our Specialities </h2>
        <div className = "row">
        <div className = "col s12 m2 l2"></div>
        <div className = "col s12 m8 l8">
        <div className = "col s12 m2 l2"></div>
				 <div className = "slider">
    <ul className = "slides">
      <li>
        <img src={golgappa} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={kebab} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={rice} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={paneer} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={dish} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={kulfi} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
      <li>
        <img src={laddoo} alt = "menu" /> 
        <div class="caption center-align">
          <h3>Foooood</h3>
          <h5 >Some stuff about it.</h5>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>
</div>


  <div class = "hide-on-med-and-up">
        <h2 style = {h2s}>Our Specialities </h2>

<div class="carousel">
    <a class="carousel-item" ><img src = {kebab} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
    <a class="carousel-item" ><img src = {chinese} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div>
        </a>
      <a class="carousel-item" ><img src = {rice} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
   <a class="carousel-item" ><img src = {laddoo} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
       <a class="carousel-item" ><img src = {kulfi} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
    <a class="carousel-item" ><img src = {dish} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
    <a class="carousel-item" ><img src = {golgappa} alt = "food" /><div class="caption center-align">
          <h3>Food</h3>
          <h5 >Some stuff about it.</h5>
        </div></a>
  </div>
</div>
  
<br />
<br/>


  			<Footer />
			</div>	
			);
	}
}

export default Home