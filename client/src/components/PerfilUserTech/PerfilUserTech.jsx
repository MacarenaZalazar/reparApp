import React, { useMemo } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { getRequestByUserTech } from "../../redux/actions/request/index";
import { getRequestDetailsbyID } from "../../redux/actions/request";

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
  WorksOrdersDiv,
  Button,
} from "./styledPerfilUserTech";
import { TiArrowBack, TiEdit, TiStarFullOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { getFinalUsersById } from "../../redux/actions/finalUser";

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

  let solicitados = 0;
  requestsByUserTech.forEach((req) => {
    if (req.solicited && !req.acepted) {
      solicitados++;
    }
  });

  let proceso = 0;
  requestsByUserTech.forEach((req) => {
    if (req.acepted && !req.completeFinal && !req.complete) {
      proceso++;
    }
  });

  let espera = 0;
  requestsByUserTech.forEach((req) => {
    if (req.acepted && req.completeFinal && !req.complete) {
      espera++;
    }
  });

  let finalizada = 0;
  requestsByUserTech.forEach((req) => {
    if (req.complete) {
      finalizada++;
    }
  });
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

            <WorksOrdersDiv>
              <h3>Mis Trabajos</h3>
              <WorksSolicited>
                <div className="title">
                  <p>Solicitados: {solicitados} </p>
                </div>
                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.solicited &&
                      !req.acepted && (
                        <div key={key} className="flexBtn">
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${user._id}`}
                          >
                            <Button
                              onClick={() => {
                                dispatch(getRequestDetailsbyID(req._id));
                                dispatch(getFinalUsersById(req.userFinal));
                              }}
                            >
                              <p> Ver Detalle</p>
                            </Button>
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksSolicited>
              <WorksProcess>
                <div className="title">
                  <p>En Proceso: {proceso} </p>
                </div>

                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.acepted &&
                      !req.completeFinal &&
                      !req.complete && (
                        <div key={key} className="flexBtn">
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${user._id}`}
                          >
                            <Button
                              onClick={() => {
                                dispatch(getRequestDetailsbyID(req._id));
                                dispatch(getFinalUsersById(req.userFinal));
                              }}
                            >
                              {req.completeTech ? (
                                <p>Recalificar</p>
                              ) : (
                                <p>Finalizar</p>
                              )}
                            </Button>
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksProcess>
              <WorksAwait>
                <div className="title">
                  <p>Para Finalizar: {espera} </p>
                </div>

                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.acepted &&
                      req.completeFinal &&
                      !req.complete && (
                        <div key={key} className="flexBtn">
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${user._id}`}
                          >
                            <Button
                              onClick={() => {
                                dispatch(getRequestDetailsbyID(req._id));
                                dispatch(getFinalUsersById(req.userFinal));
                              }}
                            >
                              <p> Finalizar</p>
                            </Button>
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksAwait>
              <WorksFinished>
                <div className="title">
                  <p>Finalizadas: {finalizada} </p>
                </div>

                {requestsByUserTech &&
                  requestsByUserTech.map((req, key) => {
                    return (
                      req.complete && (
                        <div key={key} className="flexBtn">
                          <p>{req.title}</p>
                          <Link
                            className="link"
                            to={`/solicitedWorkTech/${user._id}`}
                          >
                            <Button
                              onClick={() => {
                                dispatch(getRequestDetailsbyID(req._id));
                                dispatch(getFinalUsersById(req.userFinal));
                              }}
                            >
                              <p> Ver detalles</p>
                            </Button>
                          </Link>
                        </div>
                      )
                    );
                  })}
              </WorksFinished>
            </WorksOrdersDiv>
          </CardUserTech>
        ) : (
          <p>Cargando...</p>
        )}
      </ProfileDiv>
    </StyledDiv>
  );
};

export default PerfilUserTech;
