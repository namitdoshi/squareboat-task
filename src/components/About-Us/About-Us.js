import React from 'react';

const AboutUs = () => {

  const styleSheet = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }

  var d = new Date();
  var day = d.getDay();
  const dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  return (
    <div id='about-us' className='container' style={styleSheet}>
      <h2>Welcome to our site</h2>
      <h3>We connect Job seekers to Recruiters and Recruiters to Job Seekers</h3>
      <h4>Enjoy the rest of your {dayList[day]}</h4>
    </div>
  )
}

export default AboutUs;