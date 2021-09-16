import React from "react";
import { useSelector } from "react-redux";

const WorkOrderDetails = () => {
  const workDetails = useSelector((state) => state.requestDetails);

  return (
    <div>
      <h2>{workDetails.title}</h2>
      <h6>{workDetails.description}</h6>
      <p>{workDetails.state}</p>
      <p>{workDetails.zone}</p>
      <p>{workDetails.workType}</p>
      <img src={workDetails.workImage} alt="" />
    </div>
  );
};
export default WorkOrderDetails;
