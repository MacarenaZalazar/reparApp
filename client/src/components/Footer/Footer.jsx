import React from 'react';
import Logo from "../../utils/wrench.png";
import { Navbar, Nav, Container } from 'react-bootstrap'
import {TiSocialGithub} from "react-icons/ti";

const Footer = () => {
    return ( 
        <>
        <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">
        <img
          alt=""
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block"
          />
          ReparApp
          </Navbar.Brand>
          <span color='white'>@2021 all rights reserved</span>
          <Nav.Link href='https://github.com/MacarenaZalazar/reparApp'> <TiSocialGithub/> GitHub</Nav.Link>
        </Container>
      </Navbar>
        </>
    );
};

export default Footer;