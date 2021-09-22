import React from "react";
import { StyledDiv } from "./styledWorkOrder";
import { Link } from "react-router-dom";
import { getRequestDetailsbyID } from "../../redux/actions/request";
import { useDispatch } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser";

const WorkOrder = ({
  title,
  description,
  state,
  zone,
  workImage,
  _id,
  userFinal,
}) => {
  const dispatch = useDispatch();
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
          <Link to="/workOrdersDetails">
            <button
              onClick={() => {
                dispatch(getRequestDetailsbyID(_id));
                dispatch(getFinalUsersById(userFinal));
              }}
            >
              Detalles
            </button>
          </Link>
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
