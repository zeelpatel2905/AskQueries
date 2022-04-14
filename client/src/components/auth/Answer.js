import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

const Answer = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(async (req) => {
    if (
      localStorage.getItem('user') &&
      localStorage.getItem('type') === 'admin'
    ) {
      window.history.back();
    }
    let url = window.location.href;
    let params = url.split('?');
    const query = new URLSearchParams('?' + params[1]);
    const id = query.get('id');
    console.log(params);
    console.log(id);
    const ID = {
      id,
    };
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify(ID);
    const res = await axios.post('api/answerID', body, config);
    setData(res.data.data);
    const res1 = await axios.post('api/answer', body, config);
    setData2(res1.data.data);
  }, []);
  const [formData, setFormData] = useState({
    qid: '',
    uid: '',
    body: '',
  });
  const { qid, uid, body, answerCount } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onPostAnswer = async (e, data) => {
    let url = window.location.href;
    let params = url.split('?');
    const query = new URLSearchParams('?' + params[1]);
    const id = query.get('id');
    e.preventDefault();
    try {
      const Answer = {
        qid: id,
        uid: localStorage.getItem('user'),
        body,
        answerCount,
      };
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      console.log(id, localStorage.getItem('user'), body);
      const body1 = JSON.stringify(Answer);
      const res = await axios.post('api/postAnswer', body1, config);
      console.log(res.data);
      //increment qid answerCount
      swal({
        title: 'Great!',
        text: 'Answer posted successfully',
        icon: 'success',
      }).then(function () {
        window.location = '/Answer';
      });
    } catch (err) {
      swal('Oops!', 'Something went wrong', 'error');
    }
  };
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
                <p style={{ fontSize: '12px', color: 'grey' }}>
                  <i class='bi bi-person-fill'></i>
                  {data.uid}
                </p>
                <p style={{ fontSize: '13px' }}>{data.body}</p>
                <h>{data.tags}</h>
                <hr></hr>
                <p style={{ fontSize: '20px' }}>Answer</p>
                {data2.map((data2) => (
                  <p key={data2.uid}>
                    {data2.body}
                    <br></br>
                    <p style={{ fontSize: '12px', color: 'grey' }}>
                      {data2.uid}
                    </p>
                    <hr></hr>
                  </p>
                ))}
                <br></br>
                <form className='form' onSubmit={(e) => onPostAnswer(e, data)}>
                  <div className='form-group'>
                    <h3>Your Answer</h3>
                    <textarea
                      style={{ height: '250px', width: '80%' }}
                      type='text'
                      placeholder='Body'
                      name='body'
                      value={body}
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <input
                    type='submit'
                    className='btn btn-primary'
                    value='Submit'
                  />
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default Answer;
