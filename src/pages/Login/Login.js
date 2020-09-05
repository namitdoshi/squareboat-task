import React from 'react';

import Auth from '../../components/Auth/Auth'

const Sign = () => {
  if (localStorage.getItem('userEmail') !== null) {
    window.location.href = '/home'
  }

  return (
    <Auth 
      btn1='Log in & Hire' 
      btn2='Log in & Search'
      text1='Do not have an Account?'
      btnURL1='/login/recruiter'
      btnURL2='/login/job-seeker'
      auth='Sign Up'
      authURL='/signup'
    
    />
  )
}

export default Sign;