import React from "react";
import { StyledDiv } from './Styles';


export default function TechnicUser({
  name,
  lastName,
  user,
  image,
  score,
  workZones,
  jobTypes,
}) {
  
  console.log('estoy en techUser')
  return (
    <StyledDiv>
      <div className='infoContainer'>
      <div className='name'>
        <h2>{name} {lastName}</h2>
      </div>
      <ul>
        {jobTypes &&
          jobTypes.map((type, idx) => {
            return <li key={idx}>{type}</li>;
          })}
      </ul>
      <p>Score: {score}</p>
        </div>
      <img src={image} alt="" />
      <h4>{user}</h4>
      <div className='infoContainer'>
      <label>Trabaja en:</label>
      <ul>
        {workZones &&
          workZones.map((zone, idx) => {
            return <li key={idx}>{zone}</li>;
          })}
      </ul>
      </div>

    </StyledDiv>
  );
}
