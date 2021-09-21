import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers";
import { StyledDiv } from "./Styled";
import { useHistory } from "react-router-dom";
import  Button  from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function TechnicUserDetails(props) {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": user && user.token,
      },
    };
  }, [user]);

  const technicUserID = props.match.params.Id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(technicUserID, config));
  }, [dispatch]);

  const TechnicUserDetail = useSelector((state) => state.technicUserDetail);

  function handleClick() {
    history.push("/login");
  }

  return (
    <StyledDiv className="container">
      <div className="detContainer">
        {TechnicUserDetail.user && (
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
        )}

        {user ? (
          <div>
            <h2>Apellido: {TechnicUserDetail.user.lastName}</h2>
            <h4>Nombre: {TechnicUserDetail.user.name}</h4>
            <p>Telefono: {TechnicUserDetail.user.phone}</p>
            <p>Mail: {TechnicUserDetail.user.mail}</p>
            <Link to='/reported'>
            <Button>Reportar</Button>
            </Link>
          </div>
        ) : (
          <span onClick={handleClick}>Inicia sesión para ver mas info</span>
        )}
      </div>
    </StyledDiv>
  );
}
