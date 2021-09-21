import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { REQUEST_URL } from "../../utils/constants";
import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser";

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
      <h2>Titulo: {workDetails.title}</h2>
      <h6>Descripcion: {workDetails.description}</h6>
      <p>Provincia: {workDetails.state}</p>
      <p>Ciudad: {workDetails.zone}</p>
      <p>Tipo de servicio: {workDetails.workType}</p>
      <img src={workDetails.workImage} alt="" />
      {user && user.roles[0].name === "userTech" ? (
        <div>
          {finalUser && finalUser.user && finalUser.user.mail && (
            <div>
              <h1>Usuario solicitante : {finalUser.user.userName}</h1>
              <p>Mail: {finalUser.user.mail}</p>
              <p>Telefono: {finalUser.user.phone}</p>
            </div>
          )}
          <button onClick={postulacion(workDetails._id)}> Postularse </button>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};
export default WorkOrderDetails;
