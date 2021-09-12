import React from "react";
import { StyledDiv } from "./styledWorkOrder";

const WorkOrder = ({ title, description, state, zone, workImage }) => {
  return (
    <StyledDiv>
      <img src={`${workImage}`} alt="img" />

      <div className="infoContainer">
        <div className="name">
          <h3>
            <p>{title}</p>
          </h3>
        </div>
        <div className="subtitle">
          <p>{description}</p>
        </div>
      </div>
      <div className="infoContainer">
        <label>Requerido en:</label>
        <p>{state}</p>
        <p>{zone}</p>
      </div>
    </StyledDiv>
  );
};

export default WorkOrder;
