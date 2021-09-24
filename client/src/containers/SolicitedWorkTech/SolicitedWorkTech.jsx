import { useSelector } from "react-redux";
import { REQUEST_URL } from "../../utils/constants";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  StyledDiv,
  ContentDiv,
  WorkSolicited,
  ButtonsDiv,
  UserOwner,
  ImgDiv,
  ContentWork,
  ItemCard,
  Button,
} from "./styledSolicitedWorkTech";

const SolicitedWorkTech = (props) => {
  const MySwal = withReactContent(Swal);

  const history = useHistory();

  const requestDetails = useSelector((state) => state.requestDetails);

  const idWork = props.match.params.idWork;

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
      <ContentDiv>
        <div className="flexContent">
          <WorkSolicited>
            <div className="title">
              {requestDetails.solicited && !requestDetails.acepted && (
                <h4>Estas solicitando este trabajo</h4>
              )}
              {requestDetails.acepted && <p>Estas aceptado en este trabajo</p>}
            </div>
            {requestDetails && (
              <div className="flexWorkSolicited">
                <ImgDiv>
                  <img src={requestDetails.workImage} alt="" />
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
                  <ItemCard>
                    <p>Tipo de Trabajo</p>
                    <h4>{requestDetails.workType}</h4>
                  </ItemCard>
                </ContentWork>
              </div>
            )}
          </WorkSolicited>

          <UserOwner>
            {requestDetails && (
              <div>
                {finalUser && finalUser.user && finalUser.user.userName ? (
                  <div className="flexUserOwner">
                    <div className="title">
                      <h4>Solicitante</h4>
                    </div>

                    <ItemCard>
                      <p>Nombre y Apellido</p>
                      <h4>
                        {finalUser.user.name} {finalUser.user.lastName}
                      </h4>
                    </ItemCard>
                    <ItemCard>
                      <p>E-mail</p>
                      <h4>{finalUser.user.mail}</h4>
                    </ItemCard>
                    <ItemCard>
                      <p>Teléfono</p>
                      <h4>
                        {finalUser.user.phone
                          ? finalUser.user.phone
                          : "Sin Datos"}
                      </h4>
                    </ItemCard>
                  </div>
                ) : (
                  <div />
                )}
              </div>
            )}
          </UserOwner>
        </div>

        <ButtonsDiv>
          {requestDetails.acepted &&
            !requestDetails.complete &&
            !requestDetails.completeTech && (
              <Button onClick={() => finishedWork()}>
                <p>Finalizar Trabajo</p>
              </Button>
            )}
          {requestDetails.acepted &&
            !requestDetails.complete &&
            requestDetails.completeTech && (
              <Button onClick={() => finishedWork()}>
                <p>Recalificar</p>
              </Button>
            )}
          {requestDetails.acepted && (
            <Link to="/contacto">
              <Button>
                <p>Reportar problema</p>
              </Button>
            </Link>
          )}
        </ButtonsDiv>
      </ContentDiv>
    </StyledDiv>
  );
};

export default SolicitedWorkTech;
