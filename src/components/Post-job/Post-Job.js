import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class PostJob extends Component {

  render () {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="job-name">Job Profile</Label>
            <Input type="text" name="job-name" id="job-name" required />
          </FormGroup>
          <Button color='success'>Post Job</Button>
      </Form>
    </div>
    )
  }
}

export default PostJob;