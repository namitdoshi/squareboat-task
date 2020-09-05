import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


import './Login.scss';

class Login extends Component {

  constructor () {
    super ();
    this.state = {
      email: '',
      password: '',
      userType: ''
    }
  }

  handleChange = (event) => {
    const {value,name} = event.target

    this.setState({ [name]: value })
    console.log(this.state)
  }

  handleRadioInput = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({name: value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      "email": this.state.email,
      "password": this.state.password
    };
    
    axios.post('/signup-job-seeker', payload)
    .then(response => {
      console.log(response)
    });

  }

  render () {
    return (
      <div className='login-container'>
        <div className='row'>
          <div className='col-12 col-sm-12 col-md-12'>
            <h2>Welcome to Job Seeker Platform!</h2>
            <h4>Login to your account here</h4>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="your email here" onChange={this.handleChange} required  />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="your password here" onChange={this.handleChange} required  />
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>I am a</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="userType" value='recruiter' onClick={this.handleRadioInput}  />{' '}
                  Recruiter
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="userType" value='job-seeker' onClick={this.handleRadioInput} required  />{' '}
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
  }
}

export default Login;