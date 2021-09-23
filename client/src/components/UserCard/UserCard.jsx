import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import {Button, ImgDiv, ContentDiv, ButtonsDiv, ItemCard, TitleDiv, InfoContainer } from "./StyledCard";
import { getFinalUsersById } from "../../redux/actions/finalUser";
import { getTechUsersById } from "../../redux/actions/techUsers";
import { useDispatch } from "react-redux";
import { getRequestByUser } from "../../redux/actions/request";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const UserCard = ({
  promoted,
  idFinal,
  idTech,
  name,
  lastName,
  image,
  userName,
  id,
  score,
  state,
  ban,
}) => {
  const [banned, setBanned] = useState(ban);
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);
  const dispatch = useDispatch();
  let config = {
    headers: {
      "x-access-token": useR && useR.token,
    },
  };
  const handleBan = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/user`, { ban: true, id: id }, config);
      MySwal.fire({
        title: "Usuario baneado!",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      setBanned(!banned);
    } catch (error) {
      MySwal.fire({
        title: "No se ha podido banear al usuario",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };

  const handleUnban = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/user`, { ban: false, id: id }, config);
      MySwal.fire({
        title: "Ususario desbaneado",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      setBanned(!banned);
    } catch (error) {
      MySwal.fire({
        title: "No se ha podido desbanear al usuario",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
    }
  };

  return (
    <div>
      <ContentDiv>
        <ImgDiv>
          {image && <img src={image} alt={userName} />}
        </ImgDiv>
        <InfoContainer>
        <TitleDiv>
          <h4>{`${name} ${lastName}`}</h4>
        </TitleDiv>
        <ItemCard>
              <p>{`Username: ${userName}`}</p>
              <p>{`Provincia: ${state}`}</p>
              {score && <p>{score} </p>}
             {promoted && <p>Promocionadx</p>}
        </ItemCard>
      </InfoContainer>
      <ButtonsDiv>
        {idFinal ? (
          <Link to="/finalUserDetails">
            <Button onClick={() => dispatch(getFinalUsersById(idFinal, config))}>
              <p>Ver perfil</p>
            </Button>
          </Link>
        ) : (
          <Link to="/technicUserDetails">
            <Button onClick={() => dispatch(getTechUsersById(idTech, config))}>
              <p>Ver perfil</p>
            </Button>
          </Link>
        )}

        {banned ? (
          <Button onClick={() => handleUnban(id)}>
            <p>Desbanear</p>
            </Button>
          ) : (
            <Button onClick={() => handleBan(id)}>
              <p>Banear</p>
              </Button>
            )}
        {idFinal && (
          <Link to={"/workOrders"}>
            <Button onClick={() => dispatch(getRequestByUser(idFinal, config))}>
            <p>Ver pedidos de trabajo</p>
            </Button>
          </Link>
        )}
      </ButtonsDiv>
      </ContentDiv>
    </div>
  );
};

export default UserCard;