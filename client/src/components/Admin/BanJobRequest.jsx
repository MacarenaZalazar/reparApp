import axios from "axios";
import React, {useEffect , useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import JobRequestCard from "../JobRequestCard/JobRequestCard";
import {ADMIN_URL} from '../../utils/constants'
import { getRequestByUser } from '../../redux/actions/request/index';

const BanJobRequest = (props) => {
  const[flag, setFlag] = useState(true)
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
  }, [flag])
 
  const handleBan= async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/work`, {ban: true, id},config)
      alert('El pedido ha sido baneado')
      setFlag(false)
    } catch (error) {
      alert('No se ha podido banear el pedido')
    }
  }

  const handleUnbanned = async (id) => {
    try {
      await axios.put(`${ADMIN_URL}/ban/work`, {ban: true, id},config)
      alert('El pedido ha sido baneado')
      setFlag(true)
    } catch (error) {
      alert('No se ha podido banear el pedido')
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
                name={u.name}
                lastName={u.lastName}
                image={u.image}
                user={u.user}
                score={u.score}
                jobType={u.jobType}
                zones={u.z}
                request={u.request}
                ban={u.ban}
              />
              {(u.ban) ?  <button onClick={() => handleBan(u.id)}>Banear</button> :
              <button onClick={() => handleUnbanned(u.id)}>Desbanear</button>}
            </>
          );
        })}
    </div>
  );
};

export default BanJobRequest;
