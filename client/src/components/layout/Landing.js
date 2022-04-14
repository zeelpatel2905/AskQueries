import React,  { useEffect } from 'react'
import {Link} from 'react-router-dom';
const Landing = () => {
  useEffect(() => {
    if(localStorage.getItem('type')==="admin")
    {
      window.location='/tags';
    }
    if(localStorage.getItem('type')==="normal")
    {
      window.location='/question';
    }
    if(localStorage.getItem('type')==="recruiter")
    {
      window.location='/vacancy';
    }
  });
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
        <h1 className="x-large"><i className="bi bi-cone-striped"></i> Under Construction <i className="bi bi-cone-striped"></i></h1>
          <p className="lead">
          <i className="bi bi-question-square"></i> Question-Answer Website for Professional & Students <i className="bi bi-person-circle"></i>
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">Sign Up</Link>
            <Link to="/login" className="btn btn-light">Login</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing