import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './Navbar.css';
/* import NavDropdown from 'react-bootstrap/NavDropdown'; 
guardar para la implentación del filtro en productCategory*/

function NavScrollExample() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="navbar">
      <Container>
      <Nav.Link href="/"><img src= "https://res.cloudinary.com/dxfhquzse/image/upload/v1679883912/OIG.hs0wxlNBWIwsjsP_zoom_dx7wuq.png" style={{width: 50}} /></Nav.Link>
        <Navbar.Brand href="/">Andes Drink Co</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/cervezas">Cervezas</Nav.Link>
            <Nav.Link href="/category/espirituosas">Espirituosas</Nav.Link>
            <Nav.Link href="/category/espumante">Espumante</Nav.Link>
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> 
            guardar para la implentación del filtro en productCategory
            */}
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Buscar" className="me-2" />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
