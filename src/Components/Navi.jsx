import React,{Component} from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,NavDropdown,Form,FormControl,Button,Container} from 'react-bootstrap';
import {Route,Routes} from "react-router-dom";
import {  Link } from "react-router-dom";
import logo from "../Components/logo.png";



function Navi(){
return(
    <div>


<>
<Navbar bg="dark" variant="dark" expand="sm">
    <Container>
    
    <Navbar.Brand as={Link} to="/">
    <img
        src={logo}
        style={{ width: "30px", marginHorizontal:"10px", paddingRight:"100" }}
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />     Home</Navbar.Brand>

    <Nav className="me-auto">
      <Nav.Link as={Link} to="/Team">Team</Nav.Link>
      <Nav.Link as={Link} to="/Emotion_Detection_Player">Player</Nav.Link>
      <Nav.Link as={Link} to="/ContactUS">ContactUS</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <br />

</>





    </div>       
    );
};

export default Navi;