import React from 'react';

import Auth from '../../components/Auth/Auth'

const Sign = () => {
  return (
    <Auth 
      btn1='Sign up & Hire' 
      btn2='Sign up & Search'
      text1='Already have an Account?'
      auth='Login'
      authURL='/login'
    
    />
  )
}

export default Sign;