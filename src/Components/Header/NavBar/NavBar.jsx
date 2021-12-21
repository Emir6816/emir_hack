import React from 'react';
import { Container,  Nav, Button, NavDropdown, Form, FormControl, Offcanvas} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import './NavBar.css'

const NavBar = () => {
    return (
        <div>
            
            <Navbar bg="dark" expand={false}>
  <Container fluid>
    <Navbar.Brand href="#" >Space T</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
    
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Space T</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body >
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link id="offcanvasNavbar" href="#action1">Home</Nav.Link>
          <Nav.Link  id="offcanvasNavbar" href="#action2">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
          id="offcanvasNavbar"

            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button  id="offcanvasNavbar" variant="outline-success">Search</Button>
        </Form>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>



        </div>
    );
};

export default NavBar;