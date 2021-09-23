import React from "react";
import CardsAbout from "../../components/CardsAbout/CardsAbout";
import { infoAbout } from "../../utils/infoAbout";
import { StyledDiv } from "./styledAboutUs";


const AboutUs = () => {
  return (
    <StyledDiv>
      <h1>ReparApp</h1>
      <h3>Somos una empresa dedicada a la inclusión y facilitación de acceso a los servicios</h3>
      <h4>Conocé nuestro equipo!</h4>
      <div className='cardsContainer'>
        {infoAbout.map((e, idx) => {
          return<CardsAbout 
          name={e.name} 
          img={e.img} 
          gitHub={e.gitHub} 
          linkedin={e.linkedin}
          />
        })
        }
      </div>
    </StyledDiv>
  );
};

export default AboutUs;
