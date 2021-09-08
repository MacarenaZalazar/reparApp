import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTechUsersById } from "../../redux/actions/techUsers";
import { StyledDiv } from "./Styled";

export default function TechnicUserDetails(props) {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  let config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const technicUserID = props.match.params.Id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(technicUserID, config));
  }, []);

  const TechnicUserDetail = useSelector((state) => state.technicUserDetail);
  function handleClick() {
    alert("Debes ingresar para ver esta información");
  }

  return (
    <StyledDiv className="container">
      {TechnicUserDetail.user ? (
        <div className="detContainer">
          <h1>{TechnicUserDetail.user.userName}</h1>
          <h2>{TechnicUserDetail.user.lastName}</h2>
          <h4>{TechnicUserDetail.user.name}</h4>
          <img src={TechnicUserDetail.image} alt="" />
          <h4>{TechnicUserDetail.score}</h4>
          <p>{TechnicUserDetail.phone}</p>
          <p>Zonas de trabajo:</p>
          <ul>
            {TechnicUserDetail.workZones &&
              TechnicUserDetail.workZones.map((zone, idx) => {
                return <li key={idx}>{zone}</li>;
              })}
          </ul>
          <p>Especializado en:</p>
          <ul>
            {TechnicUserDetail.jobTypes &&
              TechnicUserDetail.jobTypes.map((zone, idx) => {
                return <li key={idx}>{zone}</li>;
              })}
          </ul>
          <p>Calificaciones :</p>
          <ul>
            {TechnicUserDetail.qualification &&
              TechnicUserDetail.qualification.map((zone, idx) => {
                return <li key={idx}>{zone}</li>;
              })}
          </ul>

          <span onClick={handleClick}>Ver datos de contacto</span>
        </div>
      ) : (
        <span>Cargando...</span>
      )}
    </StyledDiv>
  );
}
