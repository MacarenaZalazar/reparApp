import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import { ADMIN_URL } from "../../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";
import {Button, ContainerDiv, TitleDiv} from './Styles'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


const DeleteJobType = () => {
  const [newJob, setNewJob] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = async (e) => {
    try {
      await axios.put(`${ADMIN_URL}/put`, newJob, config);
      MySwal.fire({
        title: "El tipo de trabajo ha sido eliminado",
        confirmButtonColor: "#0a122aff",
        background: "#e7decdff",
        backdrop: "rgba(10,18,42,0.6)",
      });
      setFlag(!flag)
      setNewJob("");
    } catch (error) {
      console.log(error);
    }
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobTypesAll());
  }, [flag, dispatch]);

  let jobTypes = useSelector((state) => state.jobTypes);

  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);

  const config = useMemo(() => {
    return {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
  }, [useR]);
  const handleChange = (e) => {
    setNewJob({ newJob: e.target.value });
  };

  return (
    <div>
      <ContainerDiv>
        <TitleDiv>
          <h4>Eliminar tipo de trabajo</h4>
        </TitleDiv>
        <div className='littleContainer'>
        {jobTypes && (
          <select onChange={handleChange} name="jobtypes">
            <option value="">Seleccioná para eliminar</option>
            {jobTypes.map((job, key) => {
              return (
                <option value={job} key={key}>
                  {job}
                </option>
              );
            })}
          </select>
        )}
        <Button onClick={(e) => handleClick(e)}>
          <p>Eliminar</p>
          </Button>
        </div>
      </ContainerDiv>
    </div>
  );
};

export default DeleteJobType;
