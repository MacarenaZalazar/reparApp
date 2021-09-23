import React from "react";

import { useSelector } from "react-redux";

function FinalUserDetails() {
  const FinalUser = useSelector((state) => state.finalUserDetail);

  return (
    <div>
      {FinalUser && FinalUser.user && FinalUser.user.userName && (
        <div>
          <h1>{FinalUser.user.userName}</h1>
          <h2>{FinalUser.user.lastName}</h2>
          <h4>{FinalUser.user.name}</h4>
          <img src={FinalUser.user.image} alt="imagen_no_encontrada" />
          <p>{FinalUser.zone}</p>
          <h4>{FinalUser.score}</h4>
          <p>{FinalUser.user.phone}</p>
          <p>{FinalUser.user.mail}</p>
        </div>
      )}
    </div>
  );
}

export default FinalUserDetails;