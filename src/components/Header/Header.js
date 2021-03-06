import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const handleLogout = () => {
  localStorage.clear()
  window.location.href = '/'
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  
  // var userEmail = ''
  var email = localStorage.getItem('userEmail')
  // if (email !== null) {
  //   userEmail = email
  //   console.log(email)
  //   console.log(userEmail)
  // }
  
  return (
    <div>
      <Navbar color="dark" dark expand="md" fixed="top">
        <NavbarBrand href="/">Job Portal</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/#about-us">About us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">Sign up</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              {email ?  
              (<NavLink href='#' onClick={handleLogout} >Logout</NavLink>)

              :

              (<NavLink href='/login'>Login</NavLink>)
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;