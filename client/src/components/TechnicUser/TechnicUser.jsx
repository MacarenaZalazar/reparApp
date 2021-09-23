import React from "react";
import { StyledDiv, ImgDiv, ContentDiv, ItemCard, Button } from "./Styles";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers";

export default function TechnicUser({
  id,
  name,
  lastName,
  user,
  image,
  score,
  workZones,
  jobTypes,
}) {
  const dispatch = useDispatch();
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);

  let config = {
    headers: {
      "x-access-token": useR && useR.token,
    },
  };

  return (
    <StyledDiv>
      <ImgDiv>
        <img src={`${image}`} alt="img" />
      </ImgDiv>
      <ContentDiv>
        <ItemCard>
          <p>Nombre y Apellido</p>
          <h4>
            {name} {lastName}
          </h4>
        </ItemCard>
        <ItemCard>
          <p>Usuario</p>
          <h4>{user}</h4>
        </ItemCard>

        <ItemCard>
          <p>Calificación Promedio</p>
          <h4>
            <AiFillStar /> {score}
          </h4>
        </ItemCard>
      </ContentDiv>
      <ContentDiv>
        <ItemCard>
          <p>Tipos de Trabajos</p>
          <div className="flexJobTypes">
            {jobTypes &&
              jobTypes.map((type, idx) => {
                return (
                  <p className="jobp" key={idx}>
                    {type}
                  </p>
                );
              })}
          </div>
        </ItemCard>
        <ItemCard>
          <p>Zona de Trabajos</p>
          <div className="flexJobTypes">
            {workZones &&
              workZones.map((zone, idx) => {
                return (
                  <p className="jobp" key={idx}>
                    {zone}
                  </p>
                );
              })}
          </div>
        </ItemCard>
        <Link to={`/technicUserDetails`}>
          <Button onClick={() => dispatch(getTechUsersById(id, config))}>
            Ver perfil
          </Button>
        </Link>
      </ContentDiv>
    </StyledDiv>
  );
}