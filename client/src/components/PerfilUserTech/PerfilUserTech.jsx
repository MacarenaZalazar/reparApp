import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { getRequestByUserTech } from "../../redux/actions/request/index";
//import { getRequestDetailsbyID } from "../../redux/actions/request";

import {
  WorksAwait,
  WorksFinished,
  WorksProcess,
  WorksSolicited,
  StyledDiv,
  ButtonsDiv,
  ProfileDiv,
  CardUserTech,
  CardDiv,
  ContentCardDiv,
  ImgDiv,
  ItemCard,
} from "./styledPerfilUserTech";
import { TiArrowBack, TiEdit, TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";

const PerfilUserTech = () => {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);
  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": userSession && userSession.token,
      },
    };
  }, [userSession]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(userSession.idTech, config));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getRequestByUserTech(userSession.idTech));
  }, [dispatch]);

  const user = useSelector((state) => state.technicUserDetail);
  const requestsByUserTech = useSelector((state) => state.requestsByUserTech);
  console.log(user);
  return (
    <StyledDiv className="container">
      <ButtonsDiv>
        <Link className="link" to="/home">
          <TiArrowBack className="icon" />
          <p>Volver a Home</p>
        </Link>

        <Link className="link" to="/usuarioTech/modifier">
          <TiEdit className="icon" />
          <p>Editar Perfil</p>
        </Link>

        {user && user.user && !user.user.promoted ? (
          <Link className="link" to="/checkout">
            <TiStarFullOutline className="icon" />
            <p>Promocionar Perfil</p>
          </Link>
        ) : (
          <span>Promocionado</span>
        )}
      </ButtonsDiv>
      <ProfileDiv>
        {user.user ? (
          <CardUserTech>
            <CardDiv>
              <ImgDiv>
                <img src={`${user.user.image}`} alt="image_perfil" />
              </ImgDiv>
              <ContentCardDiv>
                <div className="left">
                  <ItemCard>
                    <p>Nombre y Apellido</p>
                    <h4>
                      {user.user.name} {user.user.lastName}
                    </h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Usuario</p>
                    <h4>{user.user.userName}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>E-mail</p>
                    <h4>{user.user.mail}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Teléfono</p>
                    <h4>{user.user.phone ? user.user.phone : "Sin Datos"}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Provincia</p>
                    <h4>{user.user.state}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Zonas</p>

                    {user &&
                      user.workZones &&
                      user.workZones.map((zone, idx) => {
                        return <h4 key={idx}>{zone}</h4>;
                      })}
                  </ItemCard>
                </div>
                <div className="right">
                  <ItemCard>
                    <p>Tipos de Trabajos</p>
                    {user &&
                      user.jobTypes &&
                      user.jobTypes.map((job, idx) => {
                        return <h4 key={idx}>{job}</h4>;
                      })}
                  </ItemCard>
                  <ItemCard>
                    <p>Precio Base</p>
                    <h4>{user.price}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Calificación Promedio</p>
                    <h4>{user.score}</h4>
                  </ItemCard>
                </div>
              </ContentCardDiv>
            </CardDiv>

            <div>
              <WorksSolicited>
                <h5>Trabajos postulados</h5>
                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.solicited &&
                      !req.acepted && (
                        <div key={key}>
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${req._id}`}
                          >
                            Ver Detalle
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksSolicited>
              <WorksProcess>
                <h5>Trabajos en proceso/aceptado</h5>
                {requestsByUserTech &&
                  requestsByUserTech.map((req) => {
                    return (
                      req.acepted &&
                      !req.completeTech && (
                        <div>
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${req._id}`}
                          >
                            Finalizar
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksProcess>
              <WorksAwait>
                <h5>En espera de finalizacion</h5>
                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.solicited &&
                      req.acepted &&
                      req.completeTech &&
                      !req.complete && (
                        <div key={key}>
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${req._id}`}
                          >
                            Finalizar
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksAwait>
              <WorksFinished>
                <h5>Historial de trabajos</h5>
                {requestsByUserTech &&
                  requestsByUserTech.map((req) => {
                    return (
                      req.complete && (
                        <div>
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${req._id}`}
                          >
                            Finalizar
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksFinished>
            </div>
          </CardUserTech>
        ) : (
          <p>Cargando...</p>
        )}
      </ProfileDiv>
    </StyledDiv>
  );
};

export default PerfilUserTech;
