import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';

const MyQuestion = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'admin'
    ) {
      window.history.back();
    }
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'recruiter'
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
    const res = await axios.post('api/myquestion', body, config);
    setData(res.data.data);
  }, []);

  return (
    <Fragment>
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

export default MyQuestion;
