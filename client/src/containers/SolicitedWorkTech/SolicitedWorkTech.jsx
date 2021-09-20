import { StyledDiv } from "./styledSolicitedWorkTech";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRequestDetailsbyID } from "../../redux/actions/request/index";
import { REQUEST_URL } from "../../utils/constants";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const SolicitedWorkTech = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const requestDetails = useSelector((state) => state.requestDetails);

  const idWork = props.match.params.idWork;

  useEffect(() => {
    dispatch(getRequestDetailsbyID(idWork));
  }, [dispatch]);

  let scoreTechInput = "";
  let obj = "";

  async function finishedWork() {
    const { value: scoreTech } = await Swal.fire({
      title: "Califica al usuario final",
      input: "number",
      inputLabel: "tu calificacion",
      inputPlaceholder: "Calificación de 1 a 5",
      inputAttributes: {
        min: 1,
        max: 5,
        step: 1,
      },
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

    await axios.put(`${REQUEST_URL}/${idWork}`, obj);
    Swal.fire(`¡Gracias!`);
    history.push("/usuarioTech");
  }

  return (
    <StyledDiv>
      {requestDetails.solicited && !requestDetails.acepted && (
        <p>Estas solicitando este trabajo</p>
      )}
      {requestDetails.acepted && <p>Estas aceptado en este trabajo</p>}
      {requestDetails && <h4> {requestDetails.title}</h4>}

      {/* <p>Postulante para este trabajo</p>
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.name} </h4>
      )}
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.lastName} </h4>
      )}

    <button onClick={() => refuseUserTech()}>Rechazar Solicitud</button> */}
      {requestDetails.acepted && !requestDetails.complete && (
        <button onClick={() => finishedWork()}>Finalizar Trabajo</button>
      )}
      {requestDetails.acepted && <Link to="/contacto"> Reportar problema</Link>}
    </StyledDiv>
  );
};

export default SolicitedWorkTech;
