import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const PostVacancy = () => {
  useEffect(() => {
    // if(localStorage.getItem('user') && localStorage.getItem('type')==="recruiter")
    // {
    //   window.history.back();
    // }
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'admin'
    ) {
      window.history.back();
    }
  });
  const [formData, setFormData] = useState({
    rid: '',
    companyName: '',
    jobTitle:'',
    jobDesc:'',
    expMin:'',
    location:'',
  });

  const { rid,companyName,jobTitle,jobDesc,expMin,location } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const Job = {
        rid:localStorage.getItem('user'),
        companyName,
        jobTitle,
        jobDesc,
        expMin,
        location,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(Job);
      const res = await axios.post('api/postVacancy', body, config);
      console.log(res.data);
      swal({
        title: 'Great!',
        text: 'Vacancy posted successfully',
        icon: 'success',
      }).then(function () {
        window.location = '/vacancy';
      });
    } catch (err) {
      swal('Oops!', 'Something went wrong', 'error');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>
        <i className='bi bi-briefcase-fill'></i> PostVacancy
      </h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Company Name'
            name='companyName'
            value={companyName}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Job Title'
            name='jobTitle'
            value={jobTitle}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Job Description'
            name='jobDesc'
            value={jobDesc}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Minimum Experience'
            name='expMin'
            value={expMin}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Location'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </Fragment>
  );
};

export default PostVacancy;
