import React, { useState, useMemo } from "react";
import {Button, ContainerDiv, TitleDiv} from './Styles'
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";
import  Swal  from 'sweetalert2';


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
          Swal.fire({title:"El tipo de trabajo ha sido agregado"});
          setFlag(!flag)
          document.getElementsByClassName("form-control")[0].value = "";
          setNewjob("");
        } else {
          Swal.fire({title: "Ingresar un texto valido para poder cargar un nuevo tipo de trabajo"});
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
      <ContainerDiv>
        <TitleDiv>
            <h4>Crear nuevo tipo de trabajo</h4>
        </TitleDiv>
        <div className='littleContainer'>
          <input
            type="text"
            className="form-control"
            name="newJob"
            placeholder="Nuevo trabajo..."
            autoComplete="off"
            onChange={(e) => handleInputChange(e)}
            />
          <Button onClick={(e) => handleClick(e)}>
          <p>Agregar</p> </Button>
          </div>
      </ContainerDiv>
    </>
  );
}

export default NewJobType;
