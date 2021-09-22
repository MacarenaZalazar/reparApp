import React, { useEffect, useState, useMemo } from "react";
import CardUserFinal from "../../components/PerfilUserFinal/CardUserFinal";
//import UpDateUserFinal from "../../components/PerfilUserFinal/UpDateUserFinal";
import { useDispatch, useSelector } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser/index";
import { TiArrowBack, TiPlus, TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";

import { ProfileDiv, StyledDiv, ButtonsDiv } from "./Styles";

function ProfileUserFinal() {
  const userString = window.sessionStorage.getItem("user");
  const users = JSON.parse(userString);

  let config = useMemo(() => {
    return {
      headers: {
        "x-access-token": users && users.token,
      },
    };
  }, [users]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinalUsersById(users.idUserFinal, config));
  }, [dispatch]);

  const user = useSelector((state) => state.finalUserDetail);

  console.log(user);
  return (
    <StyledDiv className="container">
      <ButtonsDiv>
        <Link className="link" to="/home">
          <TiArrowBack className="icon" />
          <p>Volver a Home</p>
        </Link>
        <Link className="link" to="/newWorkOrder">
          <TiPlus className="icon" />
          <p>Nueva Orden</p>
        </Link>
        <Link className="link" to="/modificarPerfilC">
          <TiEdit className="icon" />
          <p>Editar Perfil</p>
        </Link>
      </ButtonsDiv>
      <ProfileDiv>
        {user.user ? (
          <CardUserFinal
            name={user.user.name}
            lastname={user.user.lastName}
            tell={user.user.phone}
            mail={user.user.mail}
            username={user.user.userName}
            zone={user.zone}
            state={user.user.state}
            img={user.user.image}
          />
        ) : (
          <p>Cargando...</p>
        )}
      </ProfileDiv>
    </StyledDiv>
  );
}

export default ProfileUserFinal;
