import React, { useContext } from 'react';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import food from '../assets/food.png';
import { Link } from 'react-router';
import { CartContext } from '../context/CartContext';

const Navigation = () => {
  const { cart } = useContext(CartContext);

  const expand = 'lg';

  return (
    <Navbar expand={expand} className="bg-body-tertiary mb-3 b">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src={food}
            alt="Logo"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              borderRadius: '50%',
            }}
          />
          Khana-Khazana
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} to="/cart/orders">
                Orders
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                Cart:{' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  {cart.length}
                </span>
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Navigation;
