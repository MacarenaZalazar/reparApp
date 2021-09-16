import React, { useEffect } from "react";
import CardUserFinal from "../../components/PerfilUserFinal/CardUserFinal";
//import UpDateUserFinal from "../../components/PerfilUserFinal/UpDateUserFinal";
import { useDispatch, useSelector } from "react-redux";
import { getFinalUsersById } from "../../redux/actions/finalUser/index";
import { ContainerDiv } from "./Styles";

function ProfileUserFinal() {
  const userString = window.sessionStorage.getItem("user");
  const users = JSON.parse(userString);

  let config = {
    headers: {
      "x-access-token": users && users.token,
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFinalUsersById(users.idUserFinal, config));
  }, [dispatch, users.idUserFinal]);

  const user = useSelector((state) => state.finalUserDetail);

  console.log(user);
  return (
    <>
    <ContainerDiv>
      {user.user ? (
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                {
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
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </ContainerDiv>
    </>
  );
}

export default ProfileUserFinal;
