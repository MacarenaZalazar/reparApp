import React from "react";
import { useSelector } from "react-redux";

import { StyledDiv } from "./Styled";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import ReportUser from "../ReportUser/ReportUser";

export default function TechnicUserDetails() {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const TechnicUserDetail = useSelector((state) => state.technicUserDetail);

  function handleClick() {
    history.push("/login");
  }
  console.log(TechnicUserDetail);
  return (
    <StyledDiv className="container">
      <div className="detContainer">
        {TechnicUserDetail &&
        TechnicUserDetail.user &&
        TechnicUserDetail.user.userName ? (
          <>
            {TechnicUserDetail &&
            TechnicUserDetail.user &&
            TechnicUserDetail.user.userName ? (
              <>
                <div>
                  <h1>Usuario: {TechnicUserDetail.user.userName}</h1>
                  <img src={TechnicUserDetail.user.image} alt="" />
                  <h4>Puntaje: {TechnicUserDetail.score}</h4>

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
                </div>

                {user ? (
                  <div>
                    <h2>Apellido: {TechnicUserDetail.user.lastName}</h2>
                    <h4>Nombre: {TechnicUserDetail.user.name}</h4>
                    <p>Telefono: {TechnicUserDetail.user.phone}</p>
                    <p>Mail: {TechnicUserDetail.user.mail}</p>
                    <Button>Reportar</Button>
                    <ReportUser userId={TechnicUserDetail.user._id} />
                  </div>
                ) : (
                  <span onClick={handleClick}>
                    Inicia sesión para ver mas info
                  </span>
                )}
              </>
            ) : null}{" "}
          </>
        ) : (
          <span>Cargando...</span>
        )}
      </div>
    </StyledDiv>
  );
}