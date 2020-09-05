import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';


import '../Login/Login.scss';

class JobSeekerLogin extends Component {

  constructor () {
    super ();
    this.state = {
      email: '',
      password: '',
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
    this.setState({userType: value})
    console.log(this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let payload = {
      "email": this.state.email,
      "password": this.state.password
    };
    
    axios.post('/login-job-seeker', payload)
    .then(response => {
      console.log(response)
      if(response.data.status == 200) {
        // console.log(1)
        localStorage.setItem('userType', 'jobSeeker')
        localStorage.setItem('userEmail', this.state.email)
      }
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
            <Button color='success' onClick={this.handleSubmit} >Log In</Button>
          </Form>
          </div>

          </div>
        </div>
    )
  }
}

export default JobSeekerLogin;