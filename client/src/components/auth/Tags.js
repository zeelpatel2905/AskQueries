import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Tag = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'recruiter'
    ) {
      window.history.back();
    }
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'normal'
    ) {
      window.history.back();
    }
    const res = await axios.get('api/tag');
    setData(res.data.data);
  }, []);
  const onClick = (e) => {
    window.location = '/tag';
  };
  return (
    <Fragment>
      <button className='btn btn-primary' onClick={(e) => onClick(e)}>
        Add Tag
      </button>
      <table style={{ lineHeight: '30px', paddingTop: '15px'}}>
        <tbody>
          {data.map((data) => (
            <tr key={data.tagName}>
              <td style={{borderBottom:' rgb(204 204 204) solid 1px'}}>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                  {data.tagName}
                </p>
                <h>{data.usageGuide}</h>
                <p style={{ fontSize: '12px', color: 'grey' }}>
                {data.summary}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Tag;
