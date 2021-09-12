import React from "react";
import { useEffect } from "react";
import { getFinalUsersById } from "../../redux/actions/finalUser/index";
import { useDispatch, useSelector } from "react-redux";

function FinalUserDetails(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinalUsersById(finalUserID));
  }, [dispatch]);

  const finalUserID = props.match.params.id;
  const FinalUser = useSelector((state) => state.finalUserDetail);

  // a ver si arregla
  return (
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
  );
}

export default FinalUserDetails;
