import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import './Recruiter-Signup.scss';

class RecruiterSignup extends Component {

  constructor () {
    super();
    
    this.state = {
      email: '',
      comapanyName: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const {value,name} = event.target

    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      "email": this.state.email,
      "companyName": this.state.comapanyName,
      "password": this.state.password
    };
    
    axios.post('/signup-recruiter', payload)
    .then(response => {
      console.log(response)
    });

  }

  render () {
    return (
      <div className='container signup-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12'>
            <h2>Welcome to Job Seeker Platform!</h2>
            <h4>Sign Up for a recruiter account here</h4>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="your email here" onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="company">Company</Label>
              <Input type="text" name="company" id="company" placeholder="your company here" onChange={this.handleChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="your password here" onChange={this.handleChange} required />
            </FormGroup>
            <Button color='success' onClick={this.handleSubmit}>Sign Up</Button>
          </Form>
          </div>

          </div>
        </div>
    )
  }
};

export default RecruiterSignup;