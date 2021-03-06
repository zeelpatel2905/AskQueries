import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Company = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    if(localStorage.getItem('user') && localStorage.getItem('type')==="recruiter")
    {
      window.history.back();
    }
    if(localStorage.getItem('user') && localStorage.getItem('type')==="admin")
    {
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
    const res = await axios.get('api/company');
    setData(res.data.data);
  }, []);

  return (
    <Fragment>
      <table style={{ lineHeight: '40px', paddingTop: '15px'}}>
        <tbody>
          {data.map((data) => (
            <tr key={data.jobTitle}>
              <td style={{borderBottom:' rgb(204 204 204) solid 1px'}}>
                <p style={{ fontSize: '20px', color: '#007BFF' }}>
                <i class="bi bi-building"></i> {data.companyName}
                </p>
                <h><i class="bi bi-person-fill"></i> {data.jobTitle}</h>
                <p style={{ fontSize: '12px', color: 'grey' }}>
                <i class="bi bi-card-text"></i> Job Description: {data.jobDesc}<br></br>
                <i class="bi bi-person-workspace"></i> Minimum Experience: {data.expMin}<br></br>
                  <i class="bi bi-geo-alt-fill"></i> Location: {data.location}<br></br>
                </p>
                <center>
                <Link to={'/apply?id='+data._id}><i class="bi bi-arrow-right"></i> Apply Now <i class="bi bi-arrow-left"></i></Link>
                </center>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Company;
