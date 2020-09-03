import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


import './Login.scss';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12'>
          <h2>Welcome to Job Seeker Platform!</h2>
          <h4>Login to your account here</h4>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="your email here" required />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="your password here" required />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>I am a</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Recruiter
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" required />{' '}
                Job Seeker
              </Label>
            </FormGroup>
          </FormGroup>
          <Button color='success'>Log In</Button>
        </Form>
        </div>

        </div>
      </div>
  )
};

export default Login;