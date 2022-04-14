import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Tag = () => {
  useEffect(() => {
    if(localStorage.getItem('user') && localStorage.getItem('type')==="recruiter")
    {
      window.history.back();
    }
    if(localStorage.getItem('user') && localStorage.getItem('type')==="normal")
    {
      window.history.back();
    }
  });
  const [formData, setFormData] = useState({
    tagName: '',
    usageGuide: '',
    summary: '',
  });

  const { tagName, usageGuide, summary } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const Tag = {
        tagName,
        usageGuide,
        summary,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(Tag);
      const res = await axios.post('api/tag', body, config);
      console.log(res.data);
      swal('Done!', 'New tag added successfully', 'success');
    } catch (err) {
      swal('Oops!', 'Something went wrong', 'error');
    }
  };

  return (
    <Fragment>
      <h1 className='large text-primary'>Add Tag</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Add New Tag
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Tag Name'
            name='tagName'
            value={tagName}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Usage Guide'
            name='usageGuide'
            value={usageGuide}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <textarea
            placeholder='Summary'
            name='summary'
            value={summary}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
    </Fragment>
  );
};

export default Tag;
