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

  const renderScore = (score) => {
    let stars = []
    for(let i=1; i<= score; i++ ){
       stars.push(<AiFillStar/>)
    }
     return stars.map(s=>{
      return s
    })

  }

  return (
    <StyledDiv>
      <img src={image} alt="" />
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
      <p>{renderScore(score)}
       </p>
       
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
