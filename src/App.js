import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './pages/Landing-Page/Landing-Page';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';

import './App.css';

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <div style={styleSheet}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </Switch>
      </div>
    </div>
  );
}

const styleSheet = {
  marginTop: '7vh'
}

export default App;
