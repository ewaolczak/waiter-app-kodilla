import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <>
      <Navbar
        bg='primary'
        variant='dark'
        expand='lg'
        className='mt-4 mb-4 rounded'>
        <Container>
          <Navbar.Brand className='ms-1'>Waiter.app</Navbar.Brand>
          <Nav className='justify-content-end me-1'>
            <Nav.Link as={NavLink} to='/'>
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
