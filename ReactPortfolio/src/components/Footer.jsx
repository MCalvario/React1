import 'bootstrap/dist/css/bootstrap.min.css';
// Here we import the Footer.css file to grant access to some additional classNames
import '../styles/Footer.css';

import { Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

function footer() {
  // TODO: Add a style attribute to footer and the h1 element

  return (
    <div className='container'>
    <footer style={{ background: "black", color: "silver", justifyContent: "flex-end"}}
    className="footer">
      <h1>Contact Me</h1>
      <center>

      
      <p><h2>Send me a message!</h2></p></center>

<center>
<div className="singleCol social-media-icons-white">
      <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>

        <a href="https://Github.com">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://Twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        </div>
        </center>


     
  
  

    </footer>
    </div>
  );


}

export default footer;