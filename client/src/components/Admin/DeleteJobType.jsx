import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { ADMIN_URL } from "../../utils/constants";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";

const DeleteJobType = () => {
  const [newJob, setNewJob] = useState("");
  const [flag, setFlag] = useState(false);

  const handleClick = async (e) => {
    try {
      await axios.put(`${ADMIN_URL}/put`, newJob, config);
      alert("El tipo de trabajo ha sido eliminado");
      if (flag) {
        setFlag(false);
      } else {
        setFlag(true);
      }
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
      <div>
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
        <Button onClick={(e) => handleClick(e)}>Eliminar</Button>
      </div>
    </div>
  );
};

export default DeleteJobType;
