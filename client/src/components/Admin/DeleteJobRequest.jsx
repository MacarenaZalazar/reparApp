import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllRequests } from "../../redux/actions/request";
import JobRequestCard from "../JobRequestCard/JobRequestCard";

const DeleteJobRequest = () => {
  const dispatch = useDispatch();
  const { allRequests } = useSelector((state) => state);
  console.log(allRequests)
  function handleChange(e) {
    dispatch(getAllRequests())
  }
  function handleClick(id) {
    dispatch(DeleteJobRequest(id));
  }
  return (
    <div>
      <label>Buscar pedido de trabajo</label>
      <input
        type="text"
        onChange={handleChange}
        placeholder="pedido de trabajo..."
      />
      {allRequests.length > 1 &&
        allRequests.map((u, idx) => {
          return (
            <>
              <JobRequestCard
                id={u.id}
                name={u.name}
                lastName={u.lastName}
                image={u.image}
                user={u.user}
                score={u.score}
                jobType={u.jobType}
                zones={u.z}
                request={u.request}
              />
              <button onClick={handleClick(u.id)}>Eliminar</button>
            </>
          );
        })}
    </div>
  );
};

export default DeleteJobRequest;
