import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';

const INHeader = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#pricing">Products</Nav.Link>
      <Nav.Link href="#pricing">Best Deals</Nav.Link>
      <Nav.Link type="text"></Nav.Link>
      <input  type="search" placeholder="Type here..." width="px"></input>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>

    



      
    </Nav>
    </Container>
  </Navbar>
 
        </div>
    );
};

export default INHeader;