import React, {Component, Fragment} from 'react';

import { SocialIcon } from 'react-social-icons';

const h2s = {
  height: 35, 
  width: 35,
  marginRight:'auto', 
  marginLeft:'auto'
}

class Footer extends Component {

  render(){

    return(

    <footer class="page-footer white">
      <div class="container">
          <div class="row">
            <div class="col l4 offset-l2 s12">
                <ul>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="facebook" style= {h2s} /> </li>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="twitter" style = {h2s}/> </li>
                  <li> <SocialIcon url="https://www.facebook.com/Delhi-Grill-304409520408653/?modal=admin_todo_tour" rel="noopener noreferrer" target="_blank" network="instagram" style= {h2s}/> </li>
                </ul>
                </div>
             </div>   
          </div>
        </footer>
        )
  }
}
export default Footer;