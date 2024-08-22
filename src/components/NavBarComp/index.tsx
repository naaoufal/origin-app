import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

const NavbarComp = () => {
    return(
        <Navbar className='nav-bar' expand="lg">
            <Navbar.Brand href="#home">
                {/* <img
                src="your-logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Logo"
                /> */}
                <Nav.Link href="#link">LOGO</Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Title 1</Nav.Link>
                    <Nav.Link href="#link">Title 2</Nav.Link>
                    <Nav.Link href="#link">Title 3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComp;