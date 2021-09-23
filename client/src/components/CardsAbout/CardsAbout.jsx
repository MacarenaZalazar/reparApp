import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import './CardAbout.css'
const CardsAbout = ({ name, img, gitHub, linkedin }) => {
  return (

    <div class="card cardAbout" style={{width: 18 + 'em'}}>
    <img src={img} class="card-img-top" alt="Image no found"/>
    <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='linksAProfiles'>
    <a href={gitHub} class="btn btn-dark rounded link-github btn-lg" target="_blank">
      <GitHub/>
    </a>
    <a href={linkedin}class="btn btn-primary rounded link-linkedin btn-lg" target="_blank">
      <LinkedInIcon/>
    </a>
    </div>
    </div>
    </div>
  );
};

export default CardsAbout;
