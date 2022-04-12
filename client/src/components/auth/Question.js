import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Question = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(async () => {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'admin'
    ) {
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
    const res = await axios.post('api/question', body, config);
    setData(res.data.data);
    setData2(res.data2.data2);
  }, []);

  const onClick = (e) => {
    window.location = '/askquestion';
  };

  const [formData, setFormData] = useState({
    title: '',
    body: '',
    tags: '',
  });
  const { title, body, tags } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <button className='btn btn-primary' onClick={(e) => onClick(e)}>
        Ask question
      </button>
      {/* <table style={{ lineHeight: '30px', paddingTop: '15px' }}>
        <tbody>
          {data.map((data) => (
            <tr key={data.name}>
              <td>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                  {data.name}
                </p>
                Hi
              </td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table style={{ lineHeight: '30px', paddingTop: '15px' }}>
        <tbody>
          {data.map((data) => (
            <tr key={data.title}>
              <td>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                  {data.title}
                </p>
                <h>{data.tags}</h>
                <p style={{ fontSize: '12px', color: 'grey' }}>
                  {data.views} views&nbsp;
                  {data.answerCount} answers
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Question;
