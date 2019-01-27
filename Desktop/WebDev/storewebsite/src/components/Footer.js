import React, {Component, Fragment} from 'react';

import { SocialIcon } from 'react-social-icons';

const h2s = {
  height: 35, 
  width: 35,
  marginRight:'auto', 
  marginLeft:'auto'
}

const ths = {
  fontFamily : 'Open Sans',
  fontSize : '18px',
  color : 'white'
}

class Footer extends Component {

  render(){

    return(

    <footer className = "page-footer blue-grey darken-3">
      <div className = "container">
          <div className = "row">
            <div className = "col s12 m4 l2"></div>
            <div className = "col s12 m2 l4"></div>
            <div className = "col s12 m6 l6">
                <ul>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="facebook" style= {h2s} fgColor = "#ffffff" /> 
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                     <SocialIcon url="https://api.whatsapp.com/send?phone=60169560954" rel="noopener noreferrer" target="_blank" network="whatsapp" style= {h2s} fgColor = "#ffffff" />
                  </li>
                  <br/>
                  <a className="cyan-text text-lighten-4" href="https://www.google.com/maps/place/Delhi+Grill/@3.1329489,101.685761,17z/data=!4m12!1m6!3m5!1s0x31cc49c1beab478b:0x38abaf9bde1049c6!2sDelhi+Grill!8m2!3d3.1329489!4d101.6879551!3m4!1s0x31cc49c1beab478b:0x38abaf9bde1049c6!8m2!3d3.1329489!4d101.6879551" target="_blank">100, Jalan Tun Sambanthan, Kuala Lumpur Sentral, 50470 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</a>
                  <br/>
                  <br/>
                  <a className="cyan-text text-lighten-4" href="https://www.google.com/maps/place/Delhi+Grill/@2.9242317,101.6558502,18z/data=!4m12!1m6!3m5!1s0x31cdb6f998681337:0x7446ea8f1ed122ad!2sDelhi+Grill!8m2!3d2.9240978!4d101.6569419!3m4!1s0x31cdb6f998681337:0x7446ea8f1ed122ad!8m2!3d2.9240978!4d101.6569419" target="_blank">F-7, Block F, Jalan GC 3, Glomac, Cyber Jaya, Cyber 12, Cyber Jaya 63200, Sepang  Malaysia</a>
                  <br />
                  <br />
                  <a className="btn-flat cyan-text text-lighten-4" href="tel:60169560954" target="_blank"><i class="material-icons left">phone</i>60169560954</a>
                </ul>
                </div>
                </div>
             </div>   
          </footer>
        )
  }
}
export default Footer;