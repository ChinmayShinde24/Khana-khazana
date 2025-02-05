import React, { useContext, useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import food from '../assets/food.png';
import { Link } from 'react-router';
import { CartContext } from '../context/CartContext';
import './Styles/Navigation.css';

const Navigation = () => {
  const { cart } = useContext(CartContext);
  const expand = 'lg';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  return (
    <Navbar expand={expand} className="navbar mb-3 b">
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
        <span className="co-title text-1"> Khana-Khazana</span>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls={`offcanvasNavbar-expand-${expand}`}
        onClick={handleShow}
      />

      <Navbar.Offcanvas
        show={show}
        onHide={handleClose}
        className="hamburger"
        id={`offcanvasNavbar-expand-${expand}`}
        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <span className="co-title"> Khana-Khazana</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Nav.Link as={Link} to="/" onClick={handleClose}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" onClick={handleClose}>
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/cart/orders" onClick={handleClose}>
              Orders
            </Nav.Link>
            <Nav.Link as={Link} to="/cart" onClick={handleClose}>
              Cart:{' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                {cart.length}
              </span>
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleClose}>
              Contact
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Navigation;
