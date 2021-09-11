import React from "react";
// import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";
import {} from "../../redux/actions/allUsers";

const DeleteUser = () => {
  // const dispatch = useDispatch()

  const { allUsers } = useSelector((state) => state);

  const handleChange = (e) => {
    // dispatch(getUsersAll(e.target.value))
  };
  const handleClick = (id) => {
    // dispatch(deleteUser(id))
  };

  return (
    <div>
      <label>Buscar Usuari@</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="nombre de usuario..."
      />
      {allUsers.length > 1 &&
        allUsers.map((u, idx) => {
          return (
            <>
              <UserCard
                name={u.name}
                lastName={u.lastName}
                img={u.img}
                user={u.user}
                score={u.score}
                jobTypes={u.jobTypes}
                workZones={u.workZones}
                phone={u.phone}
                mail={u.mail}
              />
              <button onClick={handleClick(u.id)}>Eliminar</button>
            </>
          );
        })}
    </div>
  );
};

export default DeleteUser;
