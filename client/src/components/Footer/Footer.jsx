import React from "react";
import { StyledDiv } from "./styledFooter";
import Logo from "../../utils/wrench.png";

import SocialLinks from "../SocialLinks/SocialLinks";
import { socialMedia } from "../../utils/reparAppInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  const { instagram, facebook, linkedin, github } = socialMedia;

  return (
    <StyledDiv>
      <div>
        <div className='titlelogo'>
          <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block"
              />

       <h5>
            
            ReparApp
              </h5>
              
        </div>
        </div>
    
          <Link className='link' to="/contacto">Contacto</Link>
          <div>

          <SocialLinks
            instagram={instagram}
            facebook={facebook}
            linkedin={linkedin}
            github={github}
            />
          <span color="white"> @2021 all rights reserved</span>
          </div>
 

    </StyledDiv>
  );
};

export default Footer;
