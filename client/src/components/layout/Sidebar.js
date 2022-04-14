import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

const Footer = () => {
  return (
    <div className='sidenav'>
      <Link to='/'>
        <img src={logo} alt='askqueries' />
      </Link><br></br>
      <Link to='/about'>About <i className="bi bi-info-circle-fill"></i></Link>
    </div>
  );
};

export default Footer;
