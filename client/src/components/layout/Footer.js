import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

const Footer = () => {
    return (
      <footer className='footer bg-light'>
          <Link to='/about'>Copyright &#169; 2022. Designed By Zeel Patel & Dhruvi Patel </Link>
      </footer>
    );
};

export default Footer;
