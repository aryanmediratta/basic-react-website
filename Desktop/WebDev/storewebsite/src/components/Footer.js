import React, {Component, Fragment} from 'react';

import { SocialIcon } from 'react-social-icons';

const h2s = {
  height: 35, 
  width: 35,
  marginRight:'auto', 
  marginLeft:'auto'
}

const ths = {
  fontFamily : 'Courier New',
  fontSize : '18px',
  color : 'white'
}

class Footer extends Component {

  render(){

    return(

    <footer className = "page-footer grey darken-2">
      <div className = "container">
          <div className = "row">
            <div className = "col s12 m4 l2"></div>
            <div className = "col s12 m2 l5"></div>
            <div className = "col s12 m6 l5">
                <ul>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="facebook" style= {h2s} /> </li>
                  <li> <p style = {ths}> 100, Jalan Tun Sambanthan, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</p>  </li>
                  <li> <p style = {ths}> F-7, Block F, Jalan GC 3, Glomac, Cyber Jaya, Cyber 12, Cyber Jaya 63200, Sepang  Malaysia </p> </li>
                  <li> <p style= {ths}> +60 16-264 6956 </p></li>
                </ul>
                </div>
                </div>
             </div>   
        </footer>
        )
  }
}
export default Footer;