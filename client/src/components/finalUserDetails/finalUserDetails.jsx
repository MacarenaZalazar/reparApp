import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function finalUserDetails(props) {
  const finalUserID = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch("ActionQuetraigaporIddetallesdeUsuarioFinal(finalUserID)");
  }, []);

  const FinalUser = useSelector((state) => state.finalUserDetail);

  return (
    <div>
      <h1>{FinalUser.userName}</h1>
      <h2>{FinalUser.lastName}</h2>
      <h4>{FinalUser.name}</h4>
      <img src={FinalUser.image} alt="" />
      <p>{FinalUser.zone}</p>
      <h4>{FinalUser.score}</h4>
      <p>{FinalUser.phone}</p>
      <p>{FinalUser.mail}</p>
    </div>
  );
}
