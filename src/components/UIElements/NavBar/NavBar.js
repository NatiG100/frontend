import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import {
    Navbar, 
    Nav, 
    Form, 
    FormControl, 
    Button
} from 'react-bootstrap';

import '../../../bootstrap.css';
import './Navbar.css';
import Logo from '../../../logo.svg';

const NavBar = () => {
    return (
        <Navbar 
            fixed="top"
            bg="dark" 
            variant="dark" 
            style={{
                boxShadow:'0px 8px 14px rgba(45,45,45,30%)'
            }} 
            expand="lg"
        >
            <LinkContainer to="/"><Navbar.Brand>
                    <img src={Logo} height="40" width="40" />
                </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link >
                            <i className="bi bi-person"></i> Users
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books/dynamicUID">
                        <Nav.Link>
                            <i className="bi bi-cloud-arrow-up"></i> My Uploads
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books/upload">
                        <Nav.Link>
                            <i className="bi bi-upload"></i> Upload
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books/popular">
                        <Nav.Link>
                            <i className="bi bi-star"></i> Popular
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/books/filter">
                        <Nav.Link>
                            <i className="bi bi-funnel"></i> Filter
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            
                <Form inline>
                <FormControl type="text" placeholder="Search Books" className="mr-sm-2" />
                <Button variant="outline-success"><i className="bi bi-search"></i> Search</Button>
                </Form>
                <LinkContainer to="/auth"><Button className="mx-sm" variant="info">Sign In</Button></LinkContainer>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;