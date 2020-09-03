import React from 'react';
import { Button } from 'reactstrap';

import './Signup.scss';

const Signup = () => {
  return (
    <div className='container signup'>
      <h2>Sign Up</h2>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <h3>For Recruiters</h3>
          <p>
            We are the market–leading job seeker's platform to identify and hire developers with the right skills.
          </p>
          <a href='/'><Button color='success'>Sign Up & Hire</Button></a>
          <p>Already have a Member? <a href='login'>Login</a></p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <h3>For Job Seekers</h3>
          <p>
          Join over 7 million job seekers, practice coding skills, apply for jobs, give interviews, and get hired.
          </p>
          <a href='/'><Button color='success'>Sign Up & Search</Button></a>
          <p>Already have an Account? <a href='login'>Login</a></p>
        </div>
      </div>
      
    </div>
  )
};

export default Signup;