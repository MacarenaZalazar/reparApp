import { StyledDiv } from "./styledSolicitedWorkTech";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import { getRequestDetailsbyID } from "../../redux/actions/request/index";
import { REQUEST_URL } from "../../utils/constants";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const SolicitedWorkTech = (props) => {
  const MySwal = withReactContent(Swal);
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const history = useHistory();
  const dispatch = useDispatch();
  const requestDetails = useSelector((state) => state.requestDetails);

  const idWork = props.match.params.idWork;

  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": user && user.token,
      },
    };
  }, [user]);

  useEffect(() => {
    dispatch(getRequestDetailsbyID(idWork));
  }, [dispatch]);

  const finalUser = useSelector((state) => state.finalUserDetail);

  let scoreTechInput = "";
  let obj = "";

  async function finishedWork() {
    const { value: scoreTech } = await Swal.fire({
      title: "Califica al usuario final",
      input: "number",
      allowOutsideClick: false,
      inputLabel: "tu calificacion",
      inputPlaceholder: "Calificación de 1 a 5",
      inputAttributes: {
        min: 1,
        max: 5,
        step: 1,
      },
      confirmButtonColor: "#0a122aff",
      background: "#e7decdff",
      backdrop: "rgba(10,18,42,0.6)",
    });

    if (scoreTech) {
      scoreTechInput = scoreTech;
    }

    if (!requestDetails.completeFinal) {
      obj = {
        completeTech: true,
        scoreTech: scoreTechInput,
      };
    } else {
      obj = {
        complete: true,
        completeTech: true,
        scoreTech: scoreTechInput,
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
      history.push("/usuarioTech");
    } catch (error) {
      console.log(error);
      MySwal.fire({
        title: "Hubo un error.",
        icon: "error",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  }

  return (
    <StyledDiv>
      {requestDetails.solicited && !requestDetails.acepted && (
        <p>Estas solicitando este trabajo</p>
      )}
      {requestDetails.acepted && <p>Estas aceptado en este trabajo</p>}
      {requestDetails && (
        <div>
          <h4> {requestDetails.title}</h4>
          <p>{requestDetails.description}</p>
          <img src={requestDetails.workImage} alt="" />
          <p>{requestDetails.state}</p>
          <p>{requestDetails.zone}</p>
          <p>{requestDetails.workType}</p>
          {finalUser && finalUser.user && finalUser.user.userName ? (
            <div>
              <h2>Usuario: {finalUser.user.userName}</h2>
              <h4>Mail: {finalUser.user.mail}</h4>
              <p>Telefono: {finalUser.user.phone}</p>
            </div>
          ) : (
            <div />
          )}
        </div>
      )}

      {/* <p>Postulante para este trabajo</p>
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.name} </h4>
      )}
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.lastName} </h4>
      )}

    <button onClick={() => refuseUserTech()}>Rechazar Solicitud</button> */}
      {requestDetails.acepted &&
        !requestDetails.complete &&
        !requestDetails.completeTech && (
          <button onClick={() => finishedWork()}>Finalizar Trabajo</button>
        )}
      {requestDetails.acepted &&
        !requestDetails.complete &&
        requestDetails.completeTech && (
          <button onClick={() => finishedWork()}>Recalificar</button>
        )}
      {requestDetails.acepted && <Link to="/contacto"> Reportar problema</Link>}
    </StyledDiv>
  );
};

export default SolicitedWorkTech;
