import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Container } from 'react-bootstrap';
import { Link , useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from "../actions/userActions";

const Header = () => {
    const history= useHistory();
    const dispatch = useDispatch();

    const userLogin =useSelector((state) => state.userLogin);

    const {userInfo} =userLogin;
    const logoutHandler = () => {
        dispatch(logout());
        history.push("/");
    }
    return (
        <>
            <Navbar bg="dark" expand="lg" variant='dark'>
                <Container>
                    <Navbar.Brand>
                        <Link to='/'> Note Zipper</Link>
                       
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className='m-auto'>
                        <Form inline>
                            <FormControl type='text' placeholder='search' className='mr-sm-2' />
                        </Form>

                        </Nav>

                        <Nav>
                            <Nav.Link>
                                <Link to="/mynotes">
                                My Notes
                                </Link>
                               
                            </Nav.Link>
                            
                            <NavDropdown title="Neha Kumari" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
                                <NavDropdown.Divider />

                                <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                       
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header