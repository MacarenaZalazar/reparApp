import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFinalUsersById } from "../../redux/actions/finalUser/index";

export default function finalUserDetails(props) {
  const finalUserID = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFinalUsersById(finalUserID));
  }, [dispatch]);

  const FinalUser = useSelector((state) => state.finalUserDetail);

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
