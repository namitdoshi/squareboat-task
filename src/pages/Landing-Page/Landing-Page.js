import React from 'react';

import AboutUs from '../../components/About-Us/About-Us'

const LandingPage = () => {  
  if (localStorage.getItem('userEmail') !== null) {
    window.location.href = '/home'
  }
  return (
    <div>
      <AboutUs />
    </div>
  )
}

export default LandingPage;