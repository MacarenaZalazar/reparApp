import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { REQUEST_URL } from "../../utils/constants";

const WorkOrderDetails = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const workDetails = useSelector((state) => state.requestDetails);

  async function postulacion(id) {
    const res = await axios.put(`${REQUEST_URL}/${id}`, {
      userTech: user.idTech,
      solicited: true,
    });

    console.log(res);
  }

  return (
    <div>
      <h2>{workDetails.title}</h2>
      <h6>{workDetails.description}</h6>
      <p>{workDetails.state}</p>
      <p>{workDetails.zone}</p>
      <p>{workDetails.workType}</p>
      <img src={workDetails.workImage} alt="" />

      <button onClick={postulacion(workDetails._id)}> Postularse </button>
    </div>
  );
};
export default WorkOrderDetails;
