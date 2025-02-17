import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";
import { useTheme } from "../ThemeContext"; // Importing theme context
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Getting theme state and toggle function

  return (
    <Navbar expand="lg" className={isDarkMode ? "bg-dark navbar-dark" : "bg-light navbar-light"} sticky="top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold">
          CricBro
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          {/* Left: Search Bar */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search..."
              className="me-2"
              style={{ backgroundColor: isDarkMode ? "#444" : "white", color: isDarkMode ? "white" : "black" }}
            />
            <Button variant={isDarkMode ? "outline-light" : "outline-success"}>Search</Button>
          </Form>

          {/* Right: Navigation Links & Dark Mode Toggle */}
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link href="#" className="fw-semibold">Predict</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">News</Nav.Link>
            <Nav.Link href="#" className="fw-semibold">Login</Nav.Link>
            
            {/* Dark/Light Mode Toggle Button */}
            <Button
              variant={isDarkMode ? "outline-light" : "outline-dark"}
              onClick={toggleTheme}
              className="ms-3"
            >
              {isDarkMode ? "🌞" : "🌙"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
