import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
// import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
// import PropTypes from 'prop-types';

// const Register = ({ setAlert }) => {
const Register = () => {
  useEffect(() => {
    if(localStorage.getItem('user') || localStorage.getItem('type')==="admin")
    {
      window.history.back();
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    contactNo: '',
    type:'',
    tags:'',
  });

  const { name, email, password, password2, contactNo, type, tags } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Password do not match');
      swal('Oops', 'Password do not match!', 'warning');
    } else {
      const newUser = {
        name,
        email,
        password,
        contactNo,
        type,
        tags,
      };
      try {
        const config = {
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const body = JSON.stringify(newUser);
        const res = await axios.post('api/users', body, config);
        console.error(res.data);
        swal({
          title: 'Registration successful!',
          text: 'Click on OK to sign in',
          icon: 'success',
        }).then(function () {
          window.location = '/Login';
        });
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  return (
    <Fragment>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <div className="ads">
        <center>
      <h1>Join the AskQueries community</h1><br></br>
      <i className="bi bi-patch-question-fill"></i> Get unstuck - ask a question<br></br><br></br>
      <i className="bi bi-star-half"></i> Unlock new privileges like voting<br></br><br></br>
      <i className="bi bi-people-fill"></i> Share knowledge with others<br></br><br></br>
      </center>
      </div>
      <form className='form' style={{marginTop:'-35%'}} onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Full Name'
            name='name'
            value={name}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
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
            type='text'
            placeholder='Contact No'
            name='contactNo'
            value={contactNo}
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
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          Profile Picture:&nbsp;
          <input type='file' name='profileImg' onChange={(e) => onChange(e)} />
        </div>
        <div className='form-group'>
          <select name='type' onChange={(e) => onChange(e)}>
            <option value='null'>Select User Type</option>
            <option value='recruiter'>Recruiter</option>
            <option value='normal'>Normal</option>
          </select>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Tags (react java c)'
            name='tags'
            value={tags}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='./login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

// Register.PropTypes = {
//   setAlert: PropTypes.func.isRequired,
// };

// export default connect(null, { setAlert })(Register);
export default Register;
