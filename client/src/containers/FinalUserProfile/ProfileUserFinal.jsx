import React, { useEffect, useState } from "react";
import CardUserFinal from "../../components/PerfilUserFinal/CardUserFinal";
//import UpDateUserFinal from "../../components/PerfilUserFinal/UpDateUserFinal";
import { useDispatch, useSelector } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser/index";
import { useMemo } from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import { Link } from "react-router-dom";

import { ProfileDiv, StyledDiv, ButtonsDiv } from "./Styles";

function ProfileUserFinal() {
  const userString = window.sessionStorage.getItem("user");
  const users = JSON.parse(userString);

  const [back, setBack] = useState(false);

  const changeBack = () => {
    setBack(!back);
  };

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
      <ButtonsDiv back={back}>
        <Link onClick={changeBack} className="link" to="/home">
          <TiArrowLeftThick className="icon" />
          <p>Volver a Home</p>
        </Link>

        {/* <Link
              onMouseEnter={changeFlagNewOrder}
              onMouseOut={changeFlagNewOrder}
              className="link"
              to="/newWorkOrder"
            >
              New Work Order
              {flagNewOrder ? (
                <p>
                  <TiArrowLeftThick />
                </p>
              ) : (
                <p>Nueva Orden</p>
              )}
            </Link>
            <Link
              // onMouseEnter={changeFlag}
              // onMouseOut={changeFlag}
              className="link"
              to="/modificarPerfilC"
            >
              Modificar Perfil
            </Link> */}
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
