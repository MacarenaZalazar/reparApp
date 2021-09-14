import axios from "axios";
import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import JobRequestCard from "../JobRequestCard/JobRequestCard";
import {WORKORDERS_URL} from '../../utils/constants'
import { getRequestByUser } from '../../redux/actions/request/index';

const DeleteJobRequest = (props) => {
  //const [workOrder, setWorkOrder] = useState([])
  const userID = props.match.params.id
  const dispatch = useDispatch()
  const {requestsByUser} = useSelector(state => state)
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);
  let config = {
    headers: {
      "x-access-token": useR && useR.token,
    },
  };


  useEffect(() => {
    dispatch(getRequestByUser(userID, config))
  }, [])
 
  const handleClick = async (id) => {
    try {
      await axios.delete(`${WORKORDERS_URL}/${id}`)
      alert('EL pedido se ha eliminado')
    } catch (error) {
      alert('No se ha podido eliminar el pedido')
    }
  }

  return (
    <div>
      {requestsByUser.length > 1 &&
        requestsByUser.map((u, idx) => {
          return (
            <>
              <JobRequestCard
                key={idx}
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
              <button onClick={() => handleClick(u.id)}>Eliminar</button>
            </>
          );
        })}
    </div>
  );
};

export default DeleteJobRequest;
