import React from 'react';
import { TiSocialGithub, TiSocialInstagram, TiSocialLinkedin, TiSocialFacebook } from "react-icons/ti";
import { Link } from 'react-router-dom';
import {StyledDiv}  from './StyleSocialLinks'


const SocialLinks = ({instagram, facebook, linkedin, github}) => {

    return (
        <StyledDiv>
            {instagram && <Link to={instagram} target='_blank'><span><TiSocialInstagram/></span></Link> }
            {facebook && <Link to={facebook} target='_blank'><span><TiSocialFacebook/></span></Link> }
            {linkedin && <Link to={linkedin} target='_blank'><span><TiSocialLinkedin/></span></Link> }
            {github && <Link to={github} target='_blank'><span><TiSocialGithub/></span></Link> }
            <i class="fa fa-github" aria-hidden="false"></i>
        </StyledDiv>
    );
};

export default SocialLinks; 