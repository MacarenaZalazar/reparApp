import React from "react";

export default function finalUser({
  name,
  lastName,
  image,
  score,
  zone,
  user,
}) {
  return (
    <div>
      <h1>{lastName}</h1>
      <h2>{name}</h2>
      <h4>{user}</h4>
      <img src={image} alt="" />
      <p>{score}</p>
      <p>{zone}</p>
    </div>
  );
}
