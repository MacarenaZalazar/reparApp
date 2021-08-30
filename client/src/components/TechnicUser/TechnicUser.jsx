import React from "react";

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
    <div>
      <h1>{lastName}</h1>
      <h2>{name}</h2>
      <h4>{user}</h4>
      <img src={image} alt="" />
      <p>{score}</p>
      <ul>
        {workZones &&
          workZones.map((zone, idx) => {
            return <li key={idx}>{zone}</li>;
          })}
      </ul>
      <ul>
        {jobTypes &&
          jobTypes.map((type, idx) => {
            return <li key={idx}>{type}</li>;
          })}
      </ul>
    </div>
  );
}
