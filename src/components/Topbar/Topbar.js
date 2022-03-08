import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './topbar.css';

const Topbar = () => {
  return (
    <div>
        <Navbar expand="lg" bg="myColor" variant="dark">
            <Container>
              <LinkContainer to="/">
                  <Navbar.Brand>Navbar</Navbar.Brand>
              </LinkContainer>
              
              <Nav className="me-auto">
                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>
               
                <LinkContainer to='/about'>
                    <Nav.Link>About</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/contact">
                    <Nav.Link>Contact</Nav.Link>
                </LinkContainer>
                
                
              </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Topbar