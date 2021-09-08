import React from "react";
import Logo from "../../utils/wrench.png";
import { Navbar, Container } from "react-bootstrap";
import SocialLinks from "../SocialLinks/SocialLinks";
import {socialMedia} from '../../utils/reparAppInfo'



const Footer = () => {
  const {instagram, facebook, linkedin, github} = socialMedia

  return (
    <>
      <Navbar className='footer' bg="light" variant="light">
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
          <span color="white"> @2021 all rights reserved</span>
          <SocialLinks instagram={instagram} facebook={facebook} linkedin={linkedin} github={github} />
  
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
