import React, { useState, useMemo } from "react";
import {Button, ContainerDiv, TitleDiv} from './Styles'
import axios from "axios";
import { ADMIN_URL } from "../../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getJobTypesAll } from "../../redux/actions/jobTypes";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);


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
          MySwal.fire({
            title: "El tipo de trabajo ha sido agregado",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
          setFlag(!flag)
          document.getElementsByClassName("form-control")[0].value = "";
          setNewjob("");
        } else {
          MySwal.fire({
            title: "Ingresar un texto valido",
            confirmButtonColor: "#0a122aff",
            background: "#e7decdff",
            backdrop: "rgba(10,18,42,0.6)",
          });
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
