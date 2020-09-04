import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import PostJob from '../Post-job/Post-Job';
import AppliedJobs from '../Applied-Jobs/Applied-Jobs';

const RecruiterHome = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <h2>Welcome Recruiter</h2>

      <Nav tabs>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '1' })}
          onClick={() => { toggle('1'); }}
        >
          Post Jobs
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          className={classnames({ active: activeTab === '2' })}
          onClick={() => { toggle('2'); }}
        >
          View Applications
        </NavLink>
      </NavItem>
    </Nav>
    <TabContent activeTab={activeTab}>
      <TabPane tabId="1">
        <Row>
          <Col sm="12">
            <div className='container'>
              <PostJob />
            </div>
          </Col>
        </Row>
      </TabPane>
      <TabPane tabId="2">
      <AppliedJobs />
      </TabPane>
    </TabContent>

    </div>
  )
}

export default RecruiterHome;