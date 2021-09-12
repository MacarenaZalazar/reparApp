import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { Link } from "react-router-dom";

const PerfilUserTech = () => {
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);
  let config = {
    headers: {
      "x-access-token": userSession && userSession.token,
    },
  };
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(userSession.idTech, config));
  }, [dispatch]);

  const user = useSelector((state) => state.technicUserDetail);
  console.log(user);
  return (
    <div>
      {user.user ? (
        <div>
          <Link to="/home">Home</Link>
          <button>Modificar perfil</button>
          <button>Puntuaciones pendientes</button>
          <h2>{user.user.userName}</h2>
          <h4>{user.user.lastName}</h4>
          <h5>{user.user.name}</h5>
          <p>{user.user.mail}</p>
          <p>{user.user.phone}</p>
          <img src={`${user.user.image}`} alt="image_perfil" />
          <ul>
            {user &&
              user.workZones &&
              user.workZones.map((zone, idx) => {
                return <li key={idx}>{zone}</li>;
              })}
          </ul>
          <ul>
            {user &&
              user.jobTypes &&
              user.jobTypes.map((job, idx) => {
                return <li key={idx}>{job}</li>;
              })}
          </ul>
          <ul>
            {user &&
              user.qualification &&
              user.qualification.map((qualification, idx) => {
                return <li key={idx}>{qualification}</li>;
              })}
          </ul>
          <p>{user.price}</p>
          <p>{user.score}</p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default PerfilUserTech;
