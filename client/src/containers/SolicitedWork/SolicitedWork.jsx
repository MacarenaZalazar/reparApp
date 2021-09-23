import { StyledDiv } from "./styledSolicitedWork";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRequestDetailsbyID } from "../../redux/actions/request/index";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { REQUEST_URL } from "../../utils/constants";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SolicitedWork = (props) => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const dispatch = useDispatch();

  const requestDetails = useSelector((state) => state.requestDetails);
  const idWork = props.match.params.idWork;

  useEffect(() => {
    dispatch(getRequestDetailsbyID(idWork));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTechUsersById(requestDetails.userTech));
  }, [dispatch]);

  async function aceptUserTech() {
    try {
      await axios.put(`${REQUEST_URL}/${idWork}`, {
        acepted: true,
      });

      MySwal.fire({
        title: "Se aceptó la postulación con éxito",
        icon: "success",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });

      history.push("/usuarioFinal");
    } catch (error) {
      MySwal.fire({
        title: "Hubo un error.",
        icon: "error",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      console.log(error);
    }
  }

  const technicUserDetail = useSelector((state) => state.technicUserDetail);
  async function refuseUserTech() {
    try {
      await axios.put(`${REQUEST_URL}/${idWork}`, {
        acepted: false,
        solicited: false,
        userTech: null,
      });

      MySwal.fire({
        title: "Se rechazó la postulación con éxito",
        icon: "success",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });

      history.push("/usuarioFinal");
    } catch (error) {
      MySwal.fire({
        title: "Hubo un error.",
        icon: "error",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      console.log(error);
    }
  }

  let scoreFinalInput = "";
  let obj = "";
  async function finishedWork() {
    const { value: scoreFinal } = await Swal.fire({
      title: "¡Calificá al Técnico - Profesional!",
      input: "number",
      allowOutsideClick: false,
      inputLabel: "Calificación de 1 a 5",
      inputAttributes: {
        min: 1,
        max: 5,
        step: 1,
      },
      confirmButtonColor: "#0a122aff",
      background: "#e7decdff",
      backdrop: "rgba(10,18,42,0.6)",
    });

    if (scoreFinal) {
      scoreFinalInput = scoreFinal;
    }

    if (!requestDetails.completeTech) {
      obj = {
        completeFinal: true,
        scoreFinal: scoreFinalInput,
      };
    } else {
      obj = {
        complete: true,
        completeFinal: true,
        scoreFinal: scoreFinalInput,
      };
    }

    try {
      await axios.put(`${REQUEST_URL}/${idWork}`, obj);
      MySwal.fire({
        title: "¡Gracias por calificar!",
        icon: "success",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      history.push("/usuarioFinal");
    } catch (error) {
      MySwal.fire({
        title: "Hubo un error.",
        icon: "error",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      console.log(error);
    }
  }

  return (
    <StyledDiv>
      <p>Detalles del trabajo</p>
      {requestDetails && (
        <div>
          <h4>{requestDetails.title}</h4>
          <h5>{requestDetails.description}</h5>
          <img src={requestDetails.workImage} />
          <p>{requestDetails.state}</p>
          <p>{requestDetails.zone}</p>
        </div>
      )}

      {technicUserDetail && technicUserDetail.user && (
        <p>Postulante para este trabajo</p>
      )}
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.name} </h4>
      )}
      {technicUserDetail && technicUserDetail.user && (
        <div>
          <h4> {technicUserDetail.user.lastName} </h4>
          <p>{technicUserDetail.user.mail}</p>
        </div>
      )}

      {!requestDetails.acepted && requestDetails.solicited && (
        <button onClick={() => aceptUserTech()}>Aceptar solicitud</button>
      )}
      {!requestDetails.acepted && requestDetails.solicited && (
        <button onClick={() => refuseUserTech()}>Rechazar Solicitud</button>
      )}
      {requestDetails.acepted && !requestDetails.complete && (
        <Link to="/contacto"> Reportar problema</Link>
      )}
      {requestDetails.acepted &&
        !requestDetails.complete &&
        !requestDetails.completeFinal && (
          <button onClick={() => finishedWork()}>Finalizar Trabajo</button>
        )}
      {requestDetails.acepted &&
        !requestDetails.complete &&
        requestDetails.completeFinal && (
          <button onClick={() => finishedWork()}>Recalificar</button>
        )}
    </StyledDiv>
  );
};

export default SolicitedWork;
