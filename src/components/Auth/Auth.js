import React from 'react';
import { Button } from 'reactstrap';
import { Link, Route } from 'react-router-dom';

import './Auth.scss';
// import RecruiterSignup from '../Recruiter-Signup/Recruiter-Signup'
// import JobSeekerSignup from '../Job-Seeker-Signup/Job-Seeker-Signup';

// <Route exact path='/signup/recruiter' component={RecruiterSignup} />
//     <Route exact path='/signup/job-seeker' component={JobSeekerSignup} />
const Auth = (props) => {
  return (
    <div className='container'>
    
      <h2>Sign Up</h2>
      <div className='row'>
        <div className='col-sm-12 col-md-6'>
          <h3>For Recruiters</h3>
          <p>
            We are the market–leading job seeker's platform to identify and hire developers with the right skills.
          </p>
          <Link to='/signup/recruiter'><Button color='success'>{props.btn1}</Button></Link>
          <p>{props.text1} <Link to={props.authURL}>{props.auth}</Link></p>
        </div>
        <div className='col-sm-12 col-md-6'>
          <h3>For Job Seekers</h3>
          <p>
          Join over 7 million job seekers, practice coding skills, apply for jobs, give interviews, and get hired.
          </p>
          <Link to='/signup/job-seeker'><Button color='success'>{props.btn2}</Button></Link>
          <p>{props.text1} <a href={props.authURL}>{props.auth}</a></p>
        </div>
      </div>
      
    </div>
  )
};

export default Auth;