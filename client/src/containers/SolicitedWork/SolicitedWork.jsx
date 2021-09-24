import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getRequestDetailsbyID } from "../../redux/actions/request/index";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { REQUEST_URL } from "../../utils/constants";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  StyledDiv,
  ContentDiv,
  WorkSolicited,
  ImgDiv,
  ContentWork,
  ItemCard,
  Button,
  ButtonsDiv,
  UserOwner,
} from "./styledSolicitedWork";

const SolicitedWork = (props) => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const dispatch = useDispatch();

  // const userString = window.sessionStorage.getItem("user");
  // const user = JSON.parse(userString);
  // let config = useMemo(() => {
  //   return {
  //     headers: {
  //       "x-access-token": user && user.token,
  //     },
  //   };
  // }, [user]);

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
      <ContentDiv>
        <div className="flexContent">
          <WorkSolicited>
            <div className="title">
              <h4>Detalles del trabajo</h4>
            </div>
            {requestDetails && (
              <div className="flexWorkSolicited">
                <ImgDiv>
                  <img src={requestDetails.workImage} alt="img" />
                </ImgDiv>
                <ContentWork>
                  <ItemCard>
                    <p>Título</p>
                    <h4>{requestDetails.title}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Descripción</p>
                    <p className="descriptionP">{requestDetails.description}</p>
                  </ItemCard>
                  <ItemCard>
                    <p>Provincia</p>
                    <h4>{requestDetails.state}</h4>
                  </ItemCard>
                  <ItemCard>
                    <p>Zona</p>
                    <h4>{requestDetails.zone}</h4>
                  </ItemCard>
                </ContentWork>
              </div>
            )}
          </WorkSolicited>
          <UserOwner>
            <div className="flexUserOwner">
              <div className="title">
                {technicUserDetail && technicUserDetail.user && (
                  <h4>Postulante para este trabajo</h4>
                )}
              </div>
              <ItemCard>
                <p>Nombre y Apellido</p>
                <h4>
                  {technicUserDetail.user.name}{" "}
                  {technicUserDetail.user.lastName}
                </h4>
              </ItemCard>
              <ItemCard>
                <p>E-Mail</p>
                <h4>{technicUserDetail.user.mail}</h4>
              </ItemCard>
            </div>
          </UserOwner>
        </div>
        <ButtonsDiv>
          {!requestDetails.acepted && requestDetails.solicited && (
            <Button onClick={() => aceptUserTech()}>
              <p>Aceptar solicitud</p>
            </Button>
          )}
          {!requestDetails.acepted && requestDetails.solicited && (
            <Button onClick={() => refuseUserTech()}>
              <p>Rechazar Solicitud</p>
            </Button>
          )}
          {requestDetails.acepted && !requestDetails.complete && (
            <Link to="/contacto">
              <Button>
                <p>Reportar problema</p>
              </Button>
            </Link>
          )}
          {requestDetails.acepted &&
            !requestDetails.complete &&
            !requestDetails.completeFinal && (
              <Button onClick={() => finishedWork()}>
                <p>Finalizar Trabajo</p>
              </Button>
            )}
          {requestDetails.acepted &&
            !requestDetails.complete &&
            requestDetails.completeFinal && (
              <Button onClick={() => finishedWork()}>
                <p>Recalificar</p>
              </Button>
            )}
        </ButtonsDiv>
      </ContentDiv>
    </StyledDiv>
  );
};

export default SolicitedWork;
