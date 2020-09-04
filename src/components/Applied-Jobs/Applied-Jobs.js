import React from 'react';
import { Table } from 'reactstrap';

const AppliedJob = () => {
  return (
    <div className='container'>
      <Table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Profile</th>
            <th>Applicant's Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AppliedJob;