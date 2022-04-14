import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const PostAnswer = () => {
  useEffect(() => {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'admin'
    ) {
      window.history.back();
    }
  });
  const [formData, setFormData] = useState({
    uid:'',
    title: '',
    body: '',
    tags: '',
    answerCount:'',
  });

  const { uid,title, body, tags, answerCount } = formData;

  const onClick = (e) => {
    window.location = '/askquestion';
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const Question = {
        uid:localStorage.getItem('user'),
        title,
        body,
        tags,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body1 = JSON.stringify(Question);
      const res = await axios.post('api/askquestion', body1, config);
      console.log(res.data);
      swal({
        title: 'Great!',
        text: 'Question posted successfully',
        icon: 'success',
      }).then(function () {
        window.location = '/Question';
      });
    } catch (err) {
      swal('Oops!', 'Something went wrong', 'error');
    }
  };

  return (
    <Fragment>
      <h1>
        <i className='bi bi-question-circle-fill'></i> Ask a public question
      </h1>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
        <input type='hidden' name='uid' value={localStorage.getItem('user')}/>
          <p>
            Be specific and imagine you’re asking a question to another person
          </p>
          <input
            type='text'
            placeholder='Title'
            name='title'
            value={title}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <p>
            Include all the information someone would need to answer your
            question
          </p>
          <textarea
            style={{ height: '200px' }}
            type='text'
            placeholder='Body'
            name='body'
            value={body}
            onChange={(e) => onChange(e)}
            required
          />
          <div className='form-group'>
            <p>Add tags to describe what your question is about</p>
            <input
              type='text'
              placeholder='Tags (react java c)'
              name='tags'
              value={tags}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
        </div>
        <input type='submit' className='btn btn-primary' value='Submit' />
      </form>
      <div className='adsquestion'>
        <h2>
          The community is here to help you with specific coding, algorithm, or
          language problems.
        </h2>
        <br></br>
        <ul>
          <h4>1. Summarize the problem</h4>
          <li>
            <i className='bi bi-dot'></i>Include details about your goal
          </li>
          <li>
            <i className='bi bi-dot'></i>Describe expected and actual results
          </li>
          <li>
            <i className='bi bi-dot'></i>Include any error messages
          </li>
        </ul>
        <br></br>
        <ul>
          <h4>2. Describe what you have tried</h4>
          <li>
            Describe what you’ve tried Show what you’ve tried<br></br> and tell
            us what you found (on this site or elsewhere) and why it didn’t meet
            your needs. You can get better answers when you provide research.
          </li>
        </ul>
        <br></br>
        <ul>
          <h4>3. Show some code</h4>
          <li>
            When appropriate, share the minimum amount of code others need to
            reproduce your problem (also called a minimum, reproducible example)
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default PostAnswer;
