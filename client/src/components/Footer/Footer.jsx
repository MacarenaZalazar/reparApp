import React from "react";
import { StyledDiv, FooterDiv, LinksDiv, SocialDiv } from "./styledFooter";
import SocialLinks from "../SocialLinks/SocialLinks";
import { socialMedia } from "../../utils/reparAppInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  const { instagram, facebook, linkedin, github } = socialMedia;

  return (
    
    <StyledDiv>
      <FooterDiv>
        <LinksDiv>
          <Link className="link" to="/contacto">
            Contacto
          </Link>
          <Link className="link" to="/about">
            Sobre Nosotrxs
          </Link>
          <Link className="link" to="/faq">
            FAQ
          </Link>
        </LinksDiv>
        <SocialDiv>
          <SocialLinks
            instagram={instagram}
            facebook={facebook}
            linkedin={linkedin}
            github={github}
          />
        </SocialDiv>
        <p> @2021 All Rights Reserved</p>
      </FooterDiv>
    </StyledDiv>
  );
};

export default Footer;
