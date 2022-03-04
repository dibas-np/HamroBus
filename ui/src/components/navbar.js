import React , { useEffect, useState } from "react";
import { NavLink, NavMenu }
from "./NavbarElements";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import API from "./API";

const NavigationBar = () => {
  const [username, setUsername] = useState("Profile");
  useEffect(() => {
    getUsername();
  }, []);
  const getUsername = () => {
    API.get("loggeduser/1/").then(res => {
      setUsername(res.data.username);
    })

  }
return (
<Navbar  bg="dark" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand href="/home">
        <img
          alt=""
          src = "https://cdn.discordapp.com/attachments/591659008775946240/949292011624726568/Untitled_design_3.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '} 
        Hamro Bus</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/home">Home</Nav.Link>
        <Nav.Link href="/route">Add Route</Nav.Link>
        <Nav.Link href="/ticket">Manage Tickets</Nav.Link>
        <Nav.Link href="#">About Us</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
        <NavDropdown title= {"Hello, "+ username} id="basic-nav-dropdown">
          <NavDropdown.Item href="/ticket">Your Tickets</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/logout/">Log out</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)
};

export default NavigationBar;