import React from "react";
import { StyledDiv } from './Styles';
import { AiFillStar } from "react-icons/ai";


export default function TechnicUser({
  name,
  lastName,
  user,
  image,
  score,
  workZones,
  jobTypes,
}) {

  return (
    <StyledDiv>
      <img src={image} alt="" />
      <div className='infoContainer'>
        <div className='name'>
          <h3>{name} {lastName}</h3>
        </div>
        <div className='subtitle'>
          <ul>
            {jobTypes &&
              jobTypes.map((type, idx) => {
                return <li key={idx}>{type}</li>;
              })}
          </ul>
          <p><AiFillStar/> {score}</p>
          </div>
        </div>
      
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
