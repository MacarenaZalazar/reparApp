import React from "react";
import {
  StyledDiv,
  ImgDiv,
  ContentDiv,
  ItemCard,
  Button,
} from "./styledWorkOrder";
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
      <ImgDiv>
        <img src={`${workImage}`} alt="img" />
      </ImgDiv>
      <ContentDiv>
        <ItemCard>
          <p>Título</p>
          <h4>{title}</h4>
        </ItemCard>
        <ItemCard>
          <p>Descripción</p>
          <p className="pDesc">{description}</p>
        </ItemCard>
      </ContentDiv>
      <ContentDiv>
        <ItemCard>
          <p>Provincia</p>
          <h4>{state}</h4>
        </ItemCard>
        <ItemCard>
          <p>Zona</p>
          <h4>{zone}</h4>
        </ItemCard>
        <Link to="/workOrdersDetails">
          <Button
            onClick={() => {
              dispatch(getRequestDetailsbyID(_id));
              dispatch(getFinalUsersById(userFinal));
            }}
          >
            Detalles
          </Button>
        </Link>
      </ContentDiv>
    </StyledDiv>
  );
};

export default WorkOrder;
