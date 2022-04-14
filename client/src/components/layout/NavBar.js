import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.jpg';

const onClick = (e) => {
  localStorage.clear();
  window.location = '/Login';
};

const NavBar = () => {
  if (!localStorage.getItem('user') && !localStorage.getItem('type')) {
    return (
      <nav className='navbar bg-light'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='askqueries' />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/register'>
              <i className='bi bi-person-plus'> Sign up</i>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <i className='bi bi-box-arrow-in-right'> Log in</i>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='bi bi-info-square'> About</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (
    localStorage.getItem('user') &&
    localStorage.getItem('type') === 'normal'
  ) {
    return (
      <nav className='navbar bg-light'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='askqueries' />
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/question'>
              <i className='bi bi-question-square'> Questions</i>
            </Link>
          </li>
          <li>
            <Link to='/myquestion'>
              <i className='bi bi-question-circle-fill'> My Questions</i>
            </Link>
          </li>
          <li>
            <Link to='/company'>
              <i className='bi bi-building'> Companies</i>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <i className='bi bi-person-square'> Profile</i>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='bi bi-info-square'> About</i>
            </Link>
          </li>
          <li>
            <Link to='/logout' onClick={(e) => onClick(e)}>
              <i className='bi bi-box-arrow-left'> Logout</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (
    localStorage.getItem('user') &&
    localStorage.getItem('type') === 'recruiter'
  ) {
    return (
      <nav className='navbar bg-light'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='askqueries' />
          </Link>
        </h1>
        <ul>
        <li>
            <Link to='/vacancy'>
            <i class="bi bi-door-open-fill"> Vacancy</i>
            </Link>
          </li>
          <li>
            <Link to='/applicant'>
            <i class="bi bi-person-video2"> Applicant</i>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <i className='bi bi-person-square'> Profile</i>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='bi bi-info-square'> About</i>
            </Link>
          </li>
          <li>
            <Link to='/logout' onClick={(e) => onClick(e)}>
              <i className='bi bi-box-arrow-left'> Logout</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else if (
    localStorage.getItem('user') &&
    localStorage.getItem('type') === 'admin'
  ) {
    return (
      <nav className='navbar bg-light'>
        <h1>
          <Link to='/'>
            <img src={logo} alt='askqueries' />
          </Link>
        </h1>

        <ul>
          <li>
            <Link to='/tags'>
              <i className='bi bi-tag'> Tags</i>
            </Link>
          </li>
          <li>
            <Link to='/#'>
              <i className='bi bi-file-earmark-break'> Reports</i>
            </Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='bi bi-info-square'> About</i>
            </Link>
          </li>
          <li>
            <Link to='/logout' onClick={(e) => onClick(e)}>
              <i className='bi bi-box-arrow-left'> Logout</i>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default NavBar;
