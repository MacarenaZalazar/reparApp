import React from "react";
import { StyledDiv } from "./Styles";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function TechnicUser({
  id,
  name,
  lastName,
  user,
  image,
  score,
  workZones,
  jobTypes,
}) {
  console.log(image);
  return (
    <StyledDiv>
      <img src={`${image}`} alt="img" />
      <div className="infoContainer">
        <div className="name">
          <h3>
            {name} {lastName}
          </h3>
        </div>
        <span>{user}</span>
        <div className="subtitle">
          <ul>
            {jobTypes &&
              jobTypes.map((type, idx) => {
                return <li key={idx}>{type}</li>;
              })}
          </ul>
          <p>
            <AiFillStar /> {score}
          </p>
        </div>
      </div>

      <div className="infoContainer">
        <label>Trabaja en:</label>
        <ul>
          {workZones &&
            workZones.map((zone, idx) => {
              return <li key={idx}>{zone}</li>;
            })}
        </ul>
      </div>
      <Link to={`/technicUserDetails/${id}`}>
        <button>Ver perfil</button>
      </Link>
    </StyledDiv>
  );
}
