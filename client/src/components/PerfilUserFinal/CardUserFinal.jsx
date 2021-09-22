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
        <WorksSolicited>
          <h5>Solicitudes en proceso</h5>
          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                !req.solicited && (
                  <div>
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      Ver Detalle
                    </Link>
                  </div>
                )
              );
            })}
        </WorksSolicited>
        <WorksAtention>
          <h5>Solicitudes que requieren atencion</h5>
          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                req.solicited &&
                !req.acepted && (
                  <div>
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      Ver postulación
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
                  <div>
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      Finalizar
                    </Link>
                  </div>
                )
              );
            })}
        </WorksAtention>
        <WorksProcess>
          <h5>Solicitudes en proceso</h5>
          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                !req.complete &&
                req.acepted &&
                !req.completeTech && (
                  <div>
                    <p>{req.title}</p>
                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      Finalizar
                    </Link>
                  </div>
                )
              );
            })}
        </WorksProcess>
        <WorksFinished>
          <h5>Historial de solicitudes</h5>
          {requestsByUser &&
            requestsByUser.map((req) => {
              return (
                req.complete && (
                  <div>
                    <p>{req.title}</p>

                    <Link className="link" to={`/solicitedWork/${req._id}`}>
                      Ver Detalle
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
