import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import Button from "react-bootstrap/Button";
import { getFinalUsersById } from "../../redux/actions/finalUser";
import { getTechUsersById } from "../../redux/actions/techUsers";
import { useDispatch } from "react-redux";
import { getRequestByUser } from "../../redux/actions/request";

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
      alert("Usuari@ banead@");
      setBanned(!banned);
    } catch (error) {
      alert("No se ha podido banear al usuari@");
    }
  };

  const handleUnban = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/user`, { ban: false, id: id }, config);
      alert("Usuari@ desbanead@");
      setBanned(!banned);
    } catch (error) {
      alert("No se ha podido banear al usuari@");
    }
  };

  return (
    <div>
      <span>{`${name} ${lastName}`}</span>
      <span>{userName}</span>
      <img src={image} alt={userName} />
      <span>{state}</span>
      <span>{ban} </span>
      <span>{score} </span>
      <span>{promoted && promoted} </span>

      {idFinal ? (
        <Link to="/finalUserDetails">
          <Button onClick={() => dispatch(getFinalUsersById(idFinal, config))}>
            Ver perfil
          </Button>
        </Link>
      ) : (
        <Link to="/technicUserDetails">
          <Button onClick={() => dispatch(getTechUsersById(idTech, config))}>
            Ver perfil
          </Button>
        </Link>
      )}

      {banned ? (
        <Button onClick={() => handleUnban(id)}>Desbanear</Button>
      ) : (
        <Button onClick={() => handleBan(id)}>Banear</Button>
      )}
      {idFinal && (
        <Link to={"/workOrders"}>
          <Button onClick={() => dispatch(getRequestByUser(idFinal, config))}>
            Ver pedidos de trabajo
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserCard;