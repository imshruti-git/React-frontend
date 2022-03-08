import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './topbar.css';

const Topbar = () => {
  return (
    <div>
        <Navbar expand="md" bg="myColor" variant="dark" sticky='top' collapseOnSelect>
            <Container>
              <LinkContainer to="/">
                  <Navbar.Brand className='logo'>Navbar</Navbar.Brand>
              </LinkContainer>
              
              <Navbar.Toggle />
              <Navbar.Collapse>
              <Nav className='nav-menu'>
                <LinkContainer to="/">
                    <Nav.Link className='nav-item'>Home</Nav.Link>
                </LinkContainer>
               
                <LinkContainer to='/about'>
                    <Nav.Link className='nav-item'>About</Nav.Link>
                </LinkContainer>

                  <NavDropdown title='Products'>
                    <NavDropdown.Item>product1</NavDropdown.Item>
                    <NavDropdown.Item>product2</NavDropdown.Item>
                    <NavDropdown.Item>product3</NavDropdown.Item>
                    <NavDropdown.Item>product4</NavDropdown.Item>
                  </NavDropdown>

                <LinkContainer to="/contact">
                    <Nav.Link className='nav-item'>Contact</Nav.Link>
                </LinkContainer>
                
                
              </Nav>
              </Navbar.Collapse>
              
            </Container>
        </Navbar>
    </div>
  )
}

export default Topbar