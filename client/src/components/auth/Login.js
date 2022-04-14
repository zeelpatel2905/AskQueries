import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  useEffect(() => {
    if (localStorage.getItem('user')) {
      window.history.back();
    }
  });
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const User = {
        email,
        password,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(User);
      const res = await axios.post('api/auth', body, config);
      console.log(res.data);
      localStorage.setItem('user', res.data.email);
      console.log(res.data.token);
      // axios.defaults.headers.common['x-auth-token'] = res.data.token;
      localStorage.setItem('token', res.data.token);
      // setAuthToken(localStorage.token);
      localStorage.setItem('type', res.data.type);
      if (res.data.type === 'admin') window.location = '/tags';
      if (res.data.type === 'normal') window.location = '/question';
      if (res.data.type === 'recruiter') window.location = '/vacancy';
    } catch (err) {
      swal('Sign in failed!', 'Invalid email id/password', 'error');
    }
  };

  return (
    <Fragment>
      <center>
        <p className='lead' style={{ marginTop: '10%' }}>
          <i className='fas fa-user'></i> Sign Into Your Account
        </p>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email ID'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='6'
            />
          </div>
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
          Don't have an account? <Link to='/register'>Sign Up</Link>
        </p>
      </center>
    </Fragment>
  );
};

export default Login;
