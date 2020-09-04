import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing-Page/Landing-Page';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import RecruiterSignup from './pages/Recruiter-Signup/Recruiter-Signup'
import JobSeekerSignup from './pages/Job-Seeker-Signup/Job-Seeker-Signup'

import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <div style={styleSheet}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route exact path='/signup' component={Signup} />
          <Route path='/signup/recruiter' component={RecruiterSignup} />
          <Route path='/signup/job-seeker' component={JobSeekerSignup} />
        </Switch>
      </div>
    </div>
  );
}

const styleSheet = {
  marginTop: '7vh'
}

export default App;
