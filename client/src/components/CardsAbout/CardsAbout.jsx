import React from "react";
import GitHub from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import './CardAbout.css'
const CardsAbout = ({ name, img, gitHub, linkedin }) => {
  return (

    <div className="card cardAbout" style={{width: 18 + 'em'}}>
    <img src={img} className="card-img-top" alt="not found"/>
    <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='linksAProfiles'>
    <a href={gitHub} className="btn btn-dark rounded link-github btn-lg" target="_blank" rel='noreferrer'>
      <GitHub/>
    </a>
    <a href={linkedin} className="btn btn-primary rounded link-linkedin btn-lg" target="_blank" rel='noreferrer'>
      <LinkedInIcon/>
    </a>
    </div>
    </div>
    </div>
  );
};

export default CardsAbout;
