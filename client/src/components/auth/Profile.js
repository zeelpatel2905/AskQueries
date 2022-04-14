import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Profile = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
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
    const res1 = await axios.get('api/tag');
    setData2(res1.data.data);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    about: '',
    tags: '',
  });

  const { name, email, contactNo, address, city, state, pinCode, about, tags } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const User = {
        name,
        email: localStorage.getItem('user'),
        contactNo,
        address,
        city,
        state,
        pinCode,
        about,
        tags,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(User);
      const res = await axios.patch('api/profile', body, config);
      console.log(res.data);
      swal({
        title: 'Done!',
        text: 'Profile updated successfully',
        icon: 'success',
      }).then(function () {
        window.location = '/Profile';
      });
    } catch (err) {
      swal('Oops!', 'Something went wrong', 'error');
    }
  };

  return (
    <Fragment>
      <center>
        <h1 className='large text-primary'>
          <i className='bi bi-person-badge-fill'></i> Profile
        </h1>
        <form className='form' onSubmit={(e) => onSubmit(e)}>
          {data.map((data) => (
            <div key={data.name} className='form-group'>
              <h2>
                {data.email}({data.type})
              </h2>
              <i className='bi bi-at'></i> Name:<br></br>
              <input
                type='text'
                placeholder={data.name}
                name='name'
                defaultValue={data.name}
                value={name}
                onChange={(e) => onChange(e)}
                pattern='^[a-zA-Z ]*$'
                title='Name should not contain digits'
              />
              <i className='bi bi-telephone-fill'></i> Contact No:<br></br>
              <input
                type='text'
                placeholder={data.contactNo}
                name='contactNo'
                defaultValue={data.contactNo}
                value={contactNo}
                onChange={(e) => onChange(e)}
                pattern='^[789]\d{9}$'
                title='Invalid: Only digits of length 10'
              />
              <i className='bi bi-info-circle-fill'></i> About You:
              <textarea
                placeholder={data.about}
                name='about'
                defaultValue={data.about}
                value={about}
                onChange={(e) => onChange(e)}
              />
              <i className='bi bi-geo-alt-fill'></i> Address:<br></br>
              <input
                type='text'
                placeholder={data.address}
                name='address'
                defaultValue={data.address}
                value={address}
                onChange={(e) => onChange(e)}
              />
              <i className='bi bi-chevron-right'></i> City:<br></br>
              <input
                type='text'
                placeholder={data.city}
                name='city'
                defaultValue={data.city}
                value={city}
                onChange={(e) => onChange(e)}
              />
              <i className='bi bi-house-door-fill'></i> State:<br></br>
              <input
                type='text'
                placeholder={data.state}
                defaultValue={data.state}
                name='state'
                value={state}
                onChange={(e) => onChange(e)}
              />
              <i className='bi bi-geo-fill'></i> Pincode:<br></br>
              <input
                type='text'
                placeholder={data.pinCode}
                defaultValue={data.pinCode}
                name='pinCode'
                value={pinCode}
                onChange={(e) => onChange(e)}
                pattern='^[1-9][0-9]{5}$'
                title='Only digits of length 6'
              />
              <i className='bi bi-tag-fill'></i> Tags:<br></br>
              <select name='tags' onChange={(e) => onChange(e)} value={tags}>
                {data2.map((data2) => (
                  <option key={data2.tagName} value={data2.tagName}>
                    {data2.tagName}
                  </option>
                ))}
              </select>
              <br></br>
              <input type='submit' className='btn btn-primary' value='Update' />
            </div>
          ))}
        </form>
      </center>
    </Fragment>
  );
};

export default Profile;
