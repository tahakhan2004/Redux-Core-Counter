import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';

const NavBarCmp = () => {
  return (
    <>
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> 
            <NavLink to="/home" className={({isActive})=>{
                 return isActive ? "activelink" : undefined 
            }}>Home</NavLink>
            </Nav.Link>
            {/* <Nav.Link>
            <NavLink className={({isActive})=>{
                 return isActive ? "activelink" : undefined 
            }} to="/about">About</NavLink>
            </Nav.Link> */}
            {/* <Nav.Link>
            <NavLink className={({isActive})=>{
                 return isActive ? "activelink" : undefined 
            }} to="/login">Login</NavLink>
            </Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCmp
