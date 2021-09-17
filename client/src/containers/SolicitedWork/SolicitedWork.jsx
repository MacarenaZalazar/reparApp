import { StyledDiv } from "./styledSolicitedWork";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRequestDetailsbyID } from "../../redux/actions/request/index";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { REQUEST_URL } from "../../utils/constants";
import axios from "axios";

const SolicitedWork = (props) => {
  const dispatch = useDispatch();

  const requestDetails = useSelector((state) => state.requestDetails);
  const technicUserDetail = useSelector((state) => state.technicUserDetail);
  const idWork = props.match.params.idWork;

  useEffect(() => {
    dispatch(getRequestDetailsbyID(idWork));
  }, []);
  useEffect(() => {
    dispatch(getTechUsersById(requestDetails.userTech));
  }, [requestDetails]);

  async function aceptUserTech() {
    const respuesta = await axios.put(`${REQUEST_URL}/${idWork}`, {
      acepted: true,
    });
    console.log(respuesta);
  }
  async function refuseUserTech() {
    const respuesta = await axios.put(`${REQUEST_URL}/${idWork}`, {
      acepted: false,
      solicited: false,
      userTech: null,
    });
    console.log(respuesta);
  }

  return (
    <StyledDiv>
      <p>Nombre del trabajo</p>
      {requestDetails && <h4> {requestDetails.title}</h4>}

      <p>Postulante para este trabajo</p>
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.name} </h4>
      )}
      {technicUserDetail && technicUserDetail.user && (
        <h4> {technicUserDetail.user.lastName} </h4>
      )}

      <button onClick={() => aceptUserTech()}>Aceptar solicitud</button>
      <button onClick={() => refuseUserTech()}>Rechazar Solicitud</button>
    </StyledDiv>
  );
};

export default SolicitedWork;
