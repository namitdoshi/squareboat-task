import React from 'react';
import { Table, Button } from 'reactstrap';

const JobSeekerHome = () => {
  return (
    <div>
      <h2>Welcome Job Seeker!</h2>
      <h4>These are the available jobs</h4>
      <Table dark>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Company Name</th>
            <th>Profile</th>
            <th>Apply</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td><Button color='primary'>Apply</Button></td>
          </tr>
        </tbody>
    </Table>
    </div>
  )
}

export default JobSeekerHome;