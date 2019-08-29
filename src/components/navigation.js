import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/navigation.css';
import { Navbar, Nav } from "react-bootstrap";


class Navigation extends React.Component {
  render() {
    return  <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand className="home-btn" href="/">
                  <FontAwesomeIcon icon={faHome} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="/resume">Resume</Nav.Link>
                      <Nav.Link href="/blog">Blog</Nav.Link>
                      <Nav.Link href="https://github.com/maloomis">GitHub</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
              </Navbar>;
  }
}

export default Navigation;
