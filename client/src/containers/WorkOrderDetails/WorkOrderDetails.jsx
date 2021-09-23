import React, { useState, useMemo } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { REQUEST_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import {  StyledDiv,  WorkOrderDiv, UserTechDiv,  ReportedDiv, ImgWork, ItemWork, ItemUserTech, Button, Login } from "./styledWorkOrderDetails";
import ReportUser from "../../components/ReportUser/ReportUser";
import { useHistory } from "react-router-dom";
import { GoReport } from "react-icons/go";
import { HiUserAdd } from "react-icons/hi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const WorkOrderDetails = () => {
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

  const [flagReported, setFlagReported] = useState(false);
  const [flagLogin, setFlagLogin] = useState(false);

  const finalUser = useSelector((state) => state.finalUserDetail);
  const workDetails = useSelector((state) => state.requestDetails);

  const changeFlagReported = () => {
    setFlagReported(!flagReported);
  };

  const changeFlagLogin = () => {
    setFlagLogin(!flagLogin);
  };

  async function postulacion(id) {
    try {
      await axios.put(`${REQUEST_URL}/${id}`, {
        userTech: user.idTech,
        solicited: true,
      });
      MySwal.fire({
        title: "Postulación exitosa",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      history.push("/usuarioTech");
    } catch (error) {
      console.log(error);
      MySwal.fire({
        title: "Error en la postulación",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  }

  return (
    <StyledDiv className="container">
      {user && user.roles[0].name === "userTech" && (
        <ReportedDiv flag={flagReported}>
          <div className="content" onClick={changeFlagReported}>
            <GoReport className="icon" />
            <p>Reportar</p>
          </div>
          <div className="reported">
            <ReportUser workOrderId={workDetails._id} />
          </div>
        </ReportedDiv>
      )}
      <WorkOrderDiv>
        <ImgWork>
          <img src={workDetails.workImage} alt="" />
        </ImgWork>
        <div className="items">
          <ItemWork>
            <p>Título</p>
            <h4>{workDetails.title}</h4>
          </ItemWork>
          <ItemWork>
            <p>Descripcion</p>
            <h4> {workDetails.description}</h4>
          </ItemWork>
          <ItemWork>
            <p>Provincia</p>
            <h4> {workDetails.state}</h4>
          </ItemWork>
          <ItemWork>
            <p>Ciudad</p>
            <h4> {workDetails.zone}</h4>
          </ItemWork>
          <ItemWork>
            <p>Tipo de servicio</p>
            <h4> {workDetails.workType}</h4>
          </ItemWork>
        </div>
      </WorkOrderDiv>

      {user && user.roles[0].name === "userTech" && (
        <UserTechDiv>
          {finalUser && finalUser.user && finalUser.user.mail && (
            <div>
              <ItemUserTech>
                <p>Solicitante</p>
                <h4>
                  {finalUser.user.name} {finalUser.user.lastName}
                </h4>
              </ItemUserTech>
              <ItemUserTech>
                <p>Mail</p>
                <h4>{finalUser.user.mail}</h4>
              </ItemUserTech>
              <ItemUserTech>
                <p>Telefono</p>
                <h4>
                  {finalUser.user.phone ? finalUser.user.phone : "Sin Datos"}
                </h4>
              </ItemUserTech>
            </div>
          )}

          {user && user.roles[0].name === "userTech" && (
            <div className="flexButton">
              <Button onClick={() => postulacion(workDetails._id)}>
                Postularse
              </Button>
            </div>
          )}
        </UserTechDiv>
      )}
      {!user && (
        <Login flag={flagLogin}>
          <div className="login" onClick={changeFlagLogin}>
            <HiUserAdd className="icon" />
            <p> ¿Querés postularte?</p>
          </div>
          <div className="enter">
            <Link to="/login" className="enterLink">
              <Button>¡Ingresá!</Button>
            </Link>
          </div>
        </Login>
      )}
    </StyledDiv>
  );
};
export default WorkOrderDetails;
