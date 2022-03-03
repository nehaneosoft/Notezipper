import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='m-auto'>
                        <Form inline>
                            <FormControl type='text' placeholder='search' className='mr-sm-2' />
                        </Form>

                        </Nav>

                        <Nav>
                            <Nav.Link href="#home">My Notes</Nav.Link>
                            
                            <NavDropdown title="Neha Kumari" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header