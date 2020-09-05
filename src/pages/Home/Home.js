import React from 'react';

import RecruiterHome from '../../components/Recruiter-Home/Recruiter-Home';
import JobSeekerHome from '../../components/Job-Seeker-Home/Job-Seeker-Home';

const Home = () => {

  const userType = localStorage.getItem('userType')
  const userEmail = localStorage.getItem('userEmail')

  if (userType==null) {
    window.location.href = '/'
  } else if (userType=='recruiter'){
    return <RecruiterHome />
  } else {
    return <JobSeekerHome />
  }
}

export default Home;