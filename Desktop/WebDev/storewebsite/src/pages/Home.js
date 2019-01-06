import React, { Component } from 'react';

import Header from '../components/Header'

import parallax1 from '../images/parallax1.jpg';

class Home extends Component {

	render(){
		return(	
			<div>
				<Header/>
				<h2> This is the homepage </h2>
				

  			<img class = 'responsive-img' src = {parallax1}/>


			</div>	
			);
	}
}

export default Home