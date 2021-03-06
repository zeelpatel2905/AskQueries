import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Question = () => {
  const [data, setData] = useState([]);

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

  }, []);

  const onClick = (e) => {
    window.location = '/askquestion';
  };

  const onAnswer = (e, data) => {
    window.location = 'answer?id=' + data._id;
  };
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
              <td style={{ borderBottom: ' rgb(204 204 204) solid 1px' }}>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                  <Link onClick={(e) => onAnswer(e, data)}>{data.title}</Link>
                </p>
                <p style={{ fontSize: '12px', color: 'grey' }}>
                  <i class='bi bi-person-fill'></i>
                  {data.uid}
                </p>
                <h>{data.tags}</h>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Question;
