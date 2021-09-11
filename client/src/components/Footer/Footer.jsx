import React from "react";
import { StyledDiv } from "./styledFooter";
import Logo from "../../utils/wrench.png";
import { Navbar, Container } from "react-bootstrap";
import SocialLinks from "../SocialLinks/SocialLinks";
import { socialMedia } from "../../utils/reparAppInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  const { instagram, facebook, linkedin, github } = socialMedia;

  return (
    <StyledDiv>
      <Navbar className="footer" bg="light" variant="dark">
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
          <Link to="/contacto">Contacto</Link>
          <span color="white"> @2021 all rights reserved</span>
          <SocialLinks
            instagram={instagram}
            facebook={facebook}
            linkedin={linkedin}
            github={github}
          />
        </Container>
      </Navbar>
    </StyledDiv>
  );
};

export default Footer;
