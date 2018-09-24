import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className='footer'>
      &copy; Developed by Yuki Sato with
      <span>  </span><FontAwesomeIcon icon={faCoffee} />
      <span> &  </span><FontAwesomeIcon icon={faHeart} /> in Berlin | 2018
    </div>
  );
};

export default Footer;