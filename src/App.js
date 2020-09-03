import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing-Page/Landing-Page';

import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
