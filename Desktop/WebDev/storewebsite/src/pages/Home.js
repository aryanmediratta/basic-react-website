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
import para from '../images/para.jpeg';
import i1 from '../images/i1.jpeg';
import i2 from '../images/i2.jpg';
import i3 from '../images/i3.jpg';
import i4 from '../images/i4.jpg';

import M from 'materialize-css/dist/js/materialize.min.js';

const h2s = {
	textAlign : 'center',
  fontWeight : 'bold'
}

const h1s = {
  textAlign : 'center',
  fontWeight : 'bold'
}

const ps = {
	color : 'black',
  textAlign : 'center', 
  fontSize : '18px'
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
    var instances = M.Carousel.init(elems, {dist : '-225', fullWidth: true, 'indicators' : true});
  });

    M.AutoInit();

	}

	render(){
		return(	
			<div>
				<Header/>
        <br/>
        <br/>


        
        <img src={para} alt = "menu" className = "responsive-img"/>

        <h1 style = {h1s}> Delhi Grill - Authentic Indian Cuisine </h1>

      <br />
      <br />



                        <div>

				
				<p class="flow-text" style = {ps}>The bustling streets and bazaars of Delhi are home to a concoction of traditions, community and food. At Delhi Grill we bring this beautiful festival of three under one roof. At Delhi Grill you will experience the richness of multi- cuisine food ranging from street food like Pani Puri which are little balls stuffed with the spicy aloo and dunked in tamarind water.</p>
        </div>

               <div class="parallax-container">
      <div class="parallax"><img src = {i1} alt = "food" /></div>
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
          <h3>Gol Gappa</h3>
        </div>
      </li>
      <li>
        <img src={kulfi} alt = "menu"/> 
        <div class="caption center-align">
          <h3>Kulfi</h3>
        </div>
      </li>
      <li>
        <img src={laddoo} alt = "menu" /> 
        <div class="caption center-align">
          <h3>Laddoo</h3>
        </div>
      </li>
    </ul>
  </div>
</div>
</div>
</div>


<div class = "hide-on-small-only">

<p class="flow-text" style = {ps}>We also serve Chicken & Mutton Biryani made from the recipes of Awadi Khatshamas (cooks) to finishing off your meal with Kulfi Faluda another popular street food dessert made with rich creamy milk, dry fruits and vermicelli. Come and join us in this food journey and we will take you to a ride, through India’s rich food cultural experience.</p>
       


</div>



  <div class = "hide-on-med-and-up">


        <h2 style = {h2s}>Our Specialities </h2>

<div class="carousel carousel-slider">
       <a class="carousel-item" ><img src = {golgappa} alt = "food" /><div class="caption center-align black-text">
          <h3>Gol Gappa</h3>
        </div></a>
    <a class="carousel-item" ><img src = {kulfi} alt = "food" /><div class="caption center-align black-text">
          <h3>Kulfi</h3>
        </div></a>
    <a class="carousel-item" ><img src = {laddoo} alt = "food" /><div class="caption center-align black-text">
          <h3>Laddoo</h3>
        </div></a>
    <a class="carousel-item" ><img src = {kebab} alt = "food" /><div class="caption center-align black-text">
          <h3>Kebab</h3>
        </div></a>
  </div>

  
<br />
<br/>


<div class = "hide-on-med-and-up">
<p class="flow-text" style = {ps}>We also serve Chicken & Mutton Biryani made from the recipes of Awadi Khatshamas (cooks) to finishing off your meal with Kulfi Faluda another popular street food dessert made with rich creamy milk, dry fruits and vermicelli.

  Come and join us in this food journey and we will take you to a ride, through India’s rich food cultural experience.</p>
       
</div>
</div>


<div class="parallax-container">
      <div class="parallax"><img src = {i2} alt = "food" /></div>
    </div>


<h2 style = {h2s}>Our Delicacies</h2>
  <div class="row">
    <div class="col-md-4">
      <div class="thumbnail hoverable">
        <a >
          <img src={dish} alt="Lights"/>
          <div class="caption">
            <p>Hot and Sizzling Chicken</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hoverable">
        <a >
          <img src={rice} alt="Nature"/>
          <div class="caption">
            <p>Appetizing Rice</p>
          </div>
        </a>
      </div>
    </div>
    <div class="col-md-4">
      <div class="thumbnail hoverable">
        <a >
          <img src={chinese} alt="Fjords"/>
          <div class="caption">
            <p>Delicious Desi Chinese</p>
          </div>
        </a>
      </div>
    </div>
  </div>


                  <div class="parallax-container">
      <div class="parallax"><img src = {i4} alt = "food" /></div>
    </div>


    <br/>
    <br/>

  			<Footer />
			</div>	
			);
	}
}

export default Home