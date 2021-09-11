import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersById } from "../../redux/actions/techUsers/index";
import { Link } from "react-router-dom";

const PerfilUserTech = () => {
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTechUsersById(userSession.id));
  }, []);

  const user = useSelector((state) => state.technicUserDetail);
  return (
    <div>
      <h2>{user.userName}</h2>
      <h4>{user.lastName}</h4>
      <h5>{user.name}</h5>
      <p>{user.mail}</p>
      <p>{user.phone}</p>
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
      <Link to="/home">Home</Link>
      <button>Modificar perfil</button>
      <button>Puntuaciones pendientes</button>
    </div>
  );
};

export default PerfilUserTech;
