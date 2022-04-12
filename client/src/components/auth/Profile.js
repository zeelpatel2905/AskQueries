import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    if (!localStorage.getItem('user')) {
      window.history.back();
    }
    const email = localStorage.getItem('user');
    const Email = {
      email,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(Email);
    const res = await axios.post('api/profile', body, config);
    setData(res.data.data);
  }, []);

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
      window.location = '/Profile';
    } catch (err) {
      swal('Login failed!', 'Invalid Email ID/Password', 'error');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>
        <i className='bi bi-person-badge-fill'></i> Profile
      </h1>
      <table style={{ lineHeight: '30px', paddingTop: '15px' }}>
        <tbody>
          {data.map((data) => (
            <tr key={data.email}>
              <td>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                  {data.name}
                </p>
                <h>{data.contactNo}</h>
                <p style={{ fontSize: '12px', color: 'grey' }}>
                  {data.tags} views&nbsp;
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Profile;
