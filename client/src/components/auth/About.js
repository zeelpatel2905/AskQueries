import React, { Fragment} from 'react';

const About = () => {
  return (
    <Fragment>
      <h1 className='large text-primary'><i className="bi bi-info-circle-fill"></i> About</h1>
        AskQueries is a question and answer website for professional and
        enthusiast programmers. It is create in 2022 by Zeel Patel & Dhruvi Patel.
        It features questions and answers on a wide range of topics in computer
        programming.<br></br><br></br>
      <h2>Who we are</h2>
<h3>Empowering the world to develop technology through collective knowledge.</h3>
Our public platform serves 100 million people every month, making it one of the most popular websites in the world.
<br></br>
Our asynchronous knowledge management and collaboration offering, AskQueries for Teams, is transforming how people work.
<br></br>
      <br></br>
      <h4>Team:</h4>
      <i className='bi bi-linkedin'>
        <a href='https://www.linkedin.com/in/zeel-patel-zp7284' target='_blank' rel="noreferrer"> Zeel Patel
        </a>
      </i><br></br>
      <i className='bi bi-linkedin'>
        <a href='https://www.linkedin.com/in/dhruvi-patel-b42b7918b' target='_blank' rel="noreferrer"> Dhruvi Patel
        </a>
      </i>
    </Fragment>
  );
};

export default About;
