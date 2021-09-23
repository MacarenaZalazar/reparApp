import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getRequestByUser } from "../../redux/actions/request/index";
import {
  WorksOrdersDiv,
  WorksSolicited,
  WorksFinished,
  WorksAtention,
  WorksProcess,
  StyledDiv,
  ImgDiv,
  CardDiv,
  ItemCard,
  ContentCardDiv,
  Button,
} from "./styledCardUserFinal";

function CardUserFinal({
  name,
  img,
  lastname,
  tell,
  mail,
  username,

  zone,
  state,
  score,
}) {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const requestsByUser = useSelector((state) => state.requestsByUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestByUser(user.idUserFinal));
  }, [dispatch]);

  let creadas = 0;
  requestsByUser.forEach((req) => {
    if (!req.complete && !req.solicited) {
      creadas++;
    }
  });
  let atencion = 0;
  requestsByUser.forEach((req) => {
    if (!req.complete && req.solicited && !req.acepted) {
      atencion++;
    }
    if (!req.complete && req.solicited && req.completeTech) {
      atencion++;
    }
  });

  let proceso = 0;
  requestsByUser.forEach((req) => {
    if (!req.complete && req.acepted && !req.completeTech) {
      proceso++;
    }
  });

  let completas = 0;
  requestsByUser.forEach((req) => {
    if (req.complete) {
      completas++;
    }
  });

  return (
    <StyledDiv>
      <CardDiv>
        <ImgDiv>
          <img src={img} alt="imagen" />
        </ImgDiv>
        <ContentCardDiv>
          <ItemCard>
            <p>Nombre y Apellido</p>
            <h4>
              {name} {lastname}
            </h4>
          </ItemCard>
          <ItemCard>
            <p>Usuario</p>
            <h4>{username}</h4>
          </ItemCard>
          <ItemCard>
            <p>E-mail</p>
            <h4>{mail}</h4>
          </ItemCard>
          <ItemCard>
            <p>Teléfono</p>
            <h4>{tell ? tell : "Sin Datos"}</h4>
          </ItemCard>
          <ItemCard>
            <p>Provincia</p>
            <h4>{state}</h4>
          </ItemCard>
          <ItemCard>
            <p>Zona</p>
            <h4>{zone}</h4>
          </ItemCard>

          <ItemCard>
            <p>Calificación Promedio</p>
            <h4>{score}</h4>
          </ItemCard>
        </ContentCardDiv>
      </CardDiv>
      <WorksOrdersDiv>
        <h3>Solicitudes</h3>
        <WorksSolicited>
          <div className="title">
            <p>Creadas: {creadas} </p>
          </div>

          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                !req.solicited && (
                  <div className="flexBtn">
                    <p> ~ {req.title} </p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      <Button>
                        <p>Ver Detalle</p>
                      </Button>
                    </Link>
                  </div>
                )
              );
            })}
        </WorksSolicited>
        <WorksAtention>
          <div className="title">
            <p>Requieren Atención: {atencion} </p>
          </div>

          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                req.solicited &&
                !req.acepted && (
                  <div className="flexBtn">
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      <Button>
                        <p>Ver postulación</p>
                      </Button>
                    </Link>
                  </div>
                )
              );
            })}
          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                req.solicited &&
                req.completeTech && (
                  <div className="flexBtn">
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      <Button>
                        <p> Finalizar</p>
                      </Button>
                    </Link>
                  </div>
                )
              );
            })}
        </WorksAtention>
        <WorksProcess>
          <div className="title">
            <p>En proceso: {proceso} </p>
          </div>

          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                req.acepted &&
                !req.completeTech && (
                  <div className="flexBtn">
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      <Button>
                        {req.completeFinal ? (
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
        <WorksFinished>
          <div className="title">
            <p>Finalizadas: {completas} </p>
          </div>

          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                req.complete && (
                  <div className="flexBtn">
                    <p>{req.title}</p>

                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      <Button>
                        <p> Ver Detalle</p>
                      </Button>
                    </Link>
                  </div>
                )
              );
            })}
        </WorksFinished>
      </WorksOrdersDiv>
    </StyledDiv>
  );
}

export default CardUserFinal;
