import React, { useState, useMemo } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";

function NewJobType() {
  const [newJob, setNewjob] = useState("");
  const [flag, setFlag] = useState(false);
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);
  const config = useMemo(() => {
    return {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
  }, [useR]);

  function handleClick() {
    (async () => {
      try {
        if (newJob) {
          await axios.put(ADMIN_URL, newJob, config);
          alert("El tipo de trabajo ha sido agregado");
          if (flag) {
            setFlag(false);
          } else {
            setFlag(true);
          }
          document.getElementsByClassName("form-control")[0].value = "";
          setNewjob("");
        } else {
          alert(
            "Ingresar un texto valido para poder cargar un nuevo tipo de trabajo"
          );
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobTypesAll());
  }, [flag, dispatch]);

  function handleInputChange(e) {
    setNewjob((job) => ({
      newJob: e.target.value,
    }));
  }

  return (
    <>
      <div className="addJob">
        <input
          type="text"
          className="form-control"
          name="newJob"
          placeholder="Nuevo trabajo..."
          autoComplete="off"
          onChange={(e) => handleInputChange(e)}
        />
        <Button onClick={(e) => handleClick(e)}>Agregar</Button>
      </div>
    </>
  );
}

export default NewJobType;
