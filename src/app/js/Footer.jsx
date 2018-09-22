import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className='footer'>
      &copy; This site was made by Yuki Sato 2018 with
      <span>  </span><FontAwesomeIcon icon={faCoffee} />
      <span> &  </span><FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Footer;