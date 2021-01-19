import React from 'react'
import { Navbar,Nav, NavDropdown } from 'react-bootstrap';

export const Header = () => {
    return (
        <div className="header">
            <nav className="bg-dark">
            <div className="container">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"className="text-warning">Newbie</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto text-center">
      <Nav.Link href="#features">HOME</Nav.Link>
      <Nav.Link href="#features">ABOUT</Nav.Link>
      <Nav.Link href="#pricing">PRICES</Nav.Link>
      <NavDropdown title="PORTFOLIO" id="collasible-nav-dropdown">
        <NavDropdown.Item  className="bg-dark text-white" href="#action/3.1">Web development</NavDropdown.Item>
        <NavDropdown.Item  className="bg-dark text-white" href="#action/3.2">Native APP</NavDropdown.Item>
        <NavDropdown.Item  className="bg-dark text-white" href="#action/3.3">UI-Designer</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item  className="bg-dark text-white" href="#action/3.4">MySelf</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">CONTACT</Nav.Link>
    </Nav>
   
         </Navbar.Collapse>
       </Navbar> 
       </div>
      </nav>

        </div>
    )
}
