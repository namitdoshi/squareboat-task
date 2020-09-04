import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './Recruiter-Signup.scss';

const RecruiterSignup = () => {
  return (
    <div className='container signup-container'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-12'>
          <h2>Welcome to Job Seeker Platform!</h2>
          <h4>Sign Up for a recruiter account here</h4>
        <Form>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="your email here" required />
          </FormGroup>
          <FormGroup>
            <Label for="company">Company</Label>
            <Input type="text" name="company" id="company" placeholder="your company here" required />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="your password here" required />
          </FormGroup>
          <Button color='success'>Sign Up</Button>
        </Form>
        </div>

        </div>
      </div>
  )
};

export default RecruiterSignup;