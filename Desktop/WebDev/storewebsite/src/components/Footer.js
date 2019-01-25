import React, {Component, Fragment} from 'react';

import { SocialIcon } from 'react-social-icons';

const h2s = {
  height: 35, 
  width: 35,
  marginRight:'auto', 
  marginLeft:'auto'
}

const ths = {
  fontFamily : 'times',
  fontSize : '18px',
  color : 'Black'
}

class Footer extends Component {

  render(){

    return(

    <footer class="page-footer white">
      <div class="container">
          <div class="row">
            <div class="col s12 m4 l2"></div>
            <div class="col s12 m2 l5"></div>
            <div class="col s12 m6 l5">
                <ul>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="facebook" style= {h2s} /> </li>
                  <li> <p style = {ths}> 100, Jalan Tun Sambanthan, Kuala Lumpur Sentral</p>  </li>
                  <li> < p style = {ths}> 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur </p> </li>
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