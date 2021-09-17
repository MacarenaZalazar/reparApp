import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { getRequestByUser } from "../../redux/actions/request/index";
import {
  WorksOrdersDiv,
  WorksSolicited,
  WorksFinished,
  WorksAtention,
  WorksProcess,
} from "./styledCardUserFinal";
function CardUserFinal({
  name,
  img,
  lastname,
  tell,
  mail,
  username,
  password,
  zone,
  state,
}) {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const requestsByUser = useSelector((state) => state.requestsByUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestByUser(user.idUserFinal));
  }, []);

  return (
    <>
      <div class="card w-50 m-auto">
        <img src={img} class="card-img-top" alt="imagen" />
        <div class="card-body">
          <h5 class="card-title">Name: {name}</h5>
          <h5 class="card-title">Lastname: {lastname}</h5>
          <h5 class="card-title">Phone: {tell}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Mail: {mail}</li>
          <li class="list-group-item">UserName: {username}</li>
          <li class="list-group-item">Zone: {zone}</li>
          <li class="list-group-item">State: {state}</li>
        </ul>
        <div class="card-body">
          <Link to="/home">
            <button type="button" class="btn btn-dark">
              Go To Home
            </button>
          </Link>
          <Link to="/newWorkOrder">
            <button type="button" class="btn btn-primary ml-3">
              New Work Order
            </button>
          </Link>
          <Link to="/modificarPerfilC">
            <button type="button" class="btn btn-primary ml-3">
              Modificar Perfil
            </button>
          </Link>
          {/* <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a> */}
        </div>
        <WorksOrdersDiv>
          <WorksSolicited>
            <h5>Solicitudes en proceso</h5>
            {requestsByUser &&
              requestsByUser.map((req) => {
                if (!req.complete && !req.solicited) {
                  return (
                    <div>
                      <p>{req.title}</p>
                      <Link className="link" to={`/solicitedWork/${req._id}`}>
                        Ver Detalle
                      </Link>
                    </div>
                  );
                }
              })}
          </WorksSolicited>
          <WorksAtention>
            <h5>Solicitudes que requieren atencion</h5>
            {requestsByUser &&
              requestsByUser.map((req) => {
                if (!req.complete && req.solicited && !req.acepted) {
                  return (
                    <div>
                      <p>{req.title}</p>
                      <Link className="link" to={`/solicitedWork/${req._id}`}>
                        Ver postulación
                      </Link>
                    </div>
                  );
                }
              })}
            {requestsByUser &&
              requestsByUser.map((req) => {
                if (!req.complete && req.solicited && req.completeTech) {
                  return (
                    <div>
                      <p>{req.title}</p>
                      <Link className="link" to={`/solicitedWork/${req._id}`}>
                        Finalizar
                      </Link>
                    </div>
                  );
                }
              })}
          </WorksAtention>
          <WorksProcess>
            <h5>Solicitudes en proceso</h5>
            {requestsByUser &&
              requestsByUser.map((req) => {
                if (!req.complete && req.acepted && !req.completeTech) {
                  return (
                    <div>
                      <p>{req.title}</p>
                      <Link className="link" to={`/solicitedWork/${req._id}`}>
                        Finalizar
                      </Link>
                    </div>
                  );
                }
              })}
          </WorksProcess>
          <WorksFinished>
            <h5>Historial de solicitudes</h5>
            {requestsByUser &&
              requestsByUser.map((req) => {
                if (req.complete)
                  return (
                    <div>
                      <p>{req.title}</p>

                      <Link className="link" to={`/solicitedWork/${req._id}`}>
                        Ver Detalle
                      </Link>
                    </div>
                  );
              })}
          </WorksFinished>
        </WorksOrdersDiv>
      </div>
    </>
  );
}

export default CardUserFinal;
