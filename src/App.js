import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './pages/Landing-Page/Landing-Page';

import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <LandingPage />
    </div>
  );
}

export default App;
