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
	fontFamily : 'Open Sans',
  fontWeight : 'bold'
}

const ps = {
	color : 'black',
  textAlign : 'center',
  fontFamily : 'Open Sans',
  fontSize : '20px'
}

const imgS = {
  width : '100%'
}

class Home extends Component {

	componentDidMount(){
  	document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.slider');
  var instances = M.Slider.init(elems, {'indicators' : true, 'interval': 1000, 'height':400});
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
				<h2 style ={h2s}>Delhi Grill</h2>


<img src={allmenu}  className="img-responsive" alt = "menu"/>
      <br />
      <br />

				<div className = "container">
				
				<p style = {ps}>The traditional food of India has been widely appreciated for its fabulous use of herbs and spices. Indian cuisine is known for its large assortment of dishes. The cooking style varies from region to region and is largely divided into North Indian cuisine & South Indian  . At Delhi Grill we serve fresh, tasty and spicy Indian food prepared using fresh herbs, garam masalas which are roasted and made in-house combined with rich flavors from ginger and garlic. Mix of South Indian, North Indian & West Indian cuisine.</p>

				</div>

				<h2 style = {h2s}>Our Specialities </h2>
        <div className = "row">
        <div className = "col s12 m2 l2"></div>
        <div className = "col s12 m8 l8">
        <div className = "col s12 m2 l2"></div>
				 <div className = "slider">
    <ul className = "slides">
      <li>
        <img src={golgappa} alt = "menu"/> 
      </li>
      <li>
        <img src={kebab} alt = "menu"/> 
      </li>
      <li>
        <img src={rice} alt = "menu"/> 
      </li>
      <li>
        <img src={paneer} alt = "menu"/> 
      </li>
      <li>
        <img src={dish} alt = "menu"/> 
      </li>
      <li>
        <img src={kulfi} alt = "menu"/> 
      </li>
      <li>
        <img src={laddoo} alt = "menu"/> 
      </li>
    </ul>
  </div>
</div>
</div>


<div class="container">
  <h2>Carousel Options</h2>
  <p>The <strong>data-interval</strong> attribute specifies the delay (in milliseconds) between each slide.</p>
  <p>In this example, we have set the interval to "500" (default is 5000).</p>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1500">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
      <li data-target="#myCarousel" data-slide-to="3"></li>
    </ol>

    <div class="carousel-inner" role="listbox">
      <div class="item active">
        <img src={laddoo} alt="Chania" />
      </div>

      <div class="item">
        <img src={chinese} alt="Chania"/>
      </div>
    
      <div class="item">
        <img src={paneer} alt="Flower"/>
      </div>

      <div class="item">
        <img src={rice} alt="Flower" />
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
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