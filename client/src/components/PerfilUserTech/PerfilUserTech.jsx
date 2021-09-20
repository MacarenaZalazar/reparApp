import React from "react";
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
} from "./styledPerfilUserTech";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const PerfilUserTech = () => {
  const history = useHistory();
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);
  let config = {
    headers: {
      "x-access-token": userSession && userSession.token,
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(userSession.idTech, config));
  }, []);

  useEffect(() => {
    dispatch(getRequestByUserTech(userSession.idTech));
  }, []);

  const user = useSelector((state) => state.technicUserDetail);
  const requestsByUserTech = useSelector((state) => state.requestsByUserTech);
  console.log(user);
  return (
    <div>
      {user.user ? (
        <div>
          <Link to="/home">Home</Link>
          <button onClick={() => history.push("/usuarioFinal/modifier")}>
            Modificar perfil
          </button>
          <h2>{user.user.userName}</h2>
          <h4>{user.user.lastName}</h4>
          <h5>{user.user.name}</h5>
          <p>{user.user.mail}</p>
          <p>{user.user.phone}</p>
          <p>{user.user.state}</p>
          <img src={`${user.user.image}`} alt="image_perfil" />
          <ul>
            {user &&
              user.workZones &&
              user.workZones.map((zone, idx) => {
                return <li key={idx}>{zone}</li>;
              })}
          </ul>
          <ul>
            {user &&
              user.jobTypes &&
              user.jobTypes.map((job, idx) => {
                return <li key={idx}>{job}</li>;
              })}
          </ul>
          <ul>
            {user &&
              user.qualification &&
              user.qualification.map((qualification, idx) => {
                return <li key={idx}>{qualification}</li>;
              })}
          </ul>
          <p>{user.price}</p>
          <p>{user.score}</p>

          <div>
            <WorksSolicited>
              <h5>Trabajos postulados</h5>
              {requestsByUserTech &&
                requestsByUserTech.map((req) => {
                  if (req.solicited && !req.acepted) {
                    return (
                      <div>
                        <p>{req.title}</p>
                        <Link
                          className="link"
                          to={`/solicitedWorkTech/${req._id}`}
                        >
                          Ver Detalle
                        </Link>
                      </div>
                    );
                  }
                })}
            </WorksSolicited>
            <WorksProcess>
              <h5>Trabajos en proceso/aceptado</h5>
              {requestsByUserTech &&
                requestsByUserTech.map((req) => {
                  if (req.acepted && !req.completeTech) {
                    return (
                      <div>
                        <p>{req.title}</p>
                        <Link
                          className="link"
                          to={`/solicitedWorkTech/${req._id}`}
                        >
                          Finalizar
                        </Link>
                      </div>
                    );
                  }
                })}
            </WorksProcess>
            <WorksAwait>
              <h5>En espera de finalizacion</h5>
              {requestsByUserTech &&
                requestsByUserTech.map((req) => {
                  if (
                    req.solicited &&
                    req.acepted &&
                    req.completeTech &&
                    !req.complete
                  ) {
                    return (
                      <div>
                        <p>{req.title}</p>
                        <Link
                          className="link"
                          to={`/solicitedWorkTech/${req._id}`}
                        >
                          Finalizar
                        </Link>
                      </div>
                    );
                  }
                })}
            </WorksAwait>
            <WorksFinished>
              <h5>Historial de trabajos</h5>
              {requestsByUserTech &&
                requestsByUserTech.map((req) => {
                  if (req.complete) {
                    return (
                      <div>
                        <p>{req.title}</p>
                        <Link
                          className="link"
                          to={`/solicitedWorkTech/${req._id}`}
                        >
                          Finalizar
                        </Link>
                      </div>
                    );
                  }
                })}
            </WorksFinished>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PerfilUserTech;
