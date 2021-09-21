import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { REQUEST_URL } from "../../utils/constants";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReportUser from "../../components/ReportUser/ReportUser";

const WorkOrderDetails = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);
  const dispatch = useDispatch();
  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": user && user.token,
      },
    };
  }, [user]);

  const workDetails = useSelector((state) => state.requestDetails);

  useEffect(
    () => dispatch(getFinalUsersById(workDetails.userFinal, config)),
    [dispatch]
  );

  const finalUser = useSelector((state) => state.finalUserDetail);
  async function postulacion(id) {
    await axios.put(`${REQUEST_URL}/${id}`, {
      userTech: user.idTech,
      solicited: true,
    });
  }
  console.log(workDetails);
  return (
    <div>
      {workDetails && workDetails.title && (
        <div>
          <h2>Titulo: {workDetails.title}</h2>
          <h6>Descripcion: {workDetails.description}</h6>
          <p>Provincia: {workDetails.state}</p>
          <p>Ciudad: {workDetails.zone}</p>
          <p>Tipo de servicio: {workDetails.workType}</p>
          <img src={workDetails.workImage} alt="" />
        </div>
      )}
      {user && user.roles[0].name === "userTech" ? (
        <div>
          {finalUser && finalUser.user && finalUser.user.mail && (
            <div>
              <h1>Usuario solicitante : {finalUser.user.userName}</h1>
              <p>Mail: {finalUser.user.mail}</p>
              <p>Telefono: {finalUser.user.phone}</p>
              <p>Puntaje usuario: {finalUser.score}</p>
            </div>
          )}
          <Button onClick={() => postulacion(workDetails._id)}>
            {" "}
            Postularse{" "}
          </Button>
          <Button>Reportar</Button>
          <ReportUser workOrderId={workDetails._id} />
        </div>
      ) : (
        <div />
      )}
      <span>
        Querés postularte?<Link to="/login">Ingresá</Link>
      </span>
    </div>
  );
};
export default WorkOrderDetails;
