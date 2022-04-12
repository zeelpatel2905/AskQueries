import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Company = () => {
  useEffect(() => {
    // if(localStorage.getItem('user') && localStorage.getItem('type')==="recruiter")
    // {
    //   window.history.back();
    // }
    if(localStorage.getItem('user') && localStorage.getItem('type')==="admin")
    {
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
      window.location = '/Company';
    } catch (err) {
      swal('Login failed!', 'Invalid Email ID/Password', 'error');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'><i className="bi bi-briefcase-fill"></i> Company</h1>
    </Fragment>
  );
};

export default Company;
