import React from "react";
import {
  TiSocialGithub,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialFacebook,
} from "react-icons/ti";
import { Link } from "react-router-dom";
import { StyledDiv } from "./StyleSocialLinks";

const SocialLinks = ({ instagram, facebook, linkedin, github }) => {
  return (
    <StyledDiv>
      {instagram && (
        <Link to="#">
          <span>
            <TiSocialInstagram />
          </span>
        </Link>
      )}
      {facebook && (
        <Link to="#">
          <span>
            <TiSocialFacebook />
          </span>
        </Link>
      )}
      {linkedin && (
        <Link to="#">
          <span>
            <TiSocialLinkedin />
          </span>
        </Link>
      )}
      {github && (
        <Link to="#">
          <span>
            <TiSocialGithub />
          </span>
        </Link>
      )}
    </StyledDiv>
  );
};

export default SocialLinks;
