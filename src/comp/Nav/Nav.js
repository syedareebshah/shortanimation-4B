import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import React, { useState } from 'react'
import '../../App.css'



const Abc = () => {

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className='mainNav xyz'>
            <Navbar className={colorChange ? 'xyz' : 'bg'} collapseOnSelect expand="lg"  variant="dark">
  <Navbar.Brand href="#home">
    <img width='125' src='https://cdn.worldvectorlogo.com/logos/syscoin-sys--1.svg'/>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      {/* <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
    <Nav.Link href="#deets">More deets</Nav.Link>
    <Nav.Link href="#deets">More deets</Nav.Link>
    <Nav.Link href="#deets">More deets</Nav.Link>
    <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}



export default Abc;