import React, { useState, useMemo } from "react";
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { ADMIN_URL } from "../../utils/constants";

function NewJobType() {
  const [newJob, setNewjob] = useState("");
  const userString = window.sessionStorage.getItem("user");
  const useR = JSON.parse(userString);
  const config = useMemo(()=> {
    return {
      headers: {
        "x-access-token": useR && useR.token,
      },
    };
  }, [useR])

  function handleClick() {
    (async () => {
        try {
        await axios.put(ADMIN_URL, newJob, config);
        alert('El tipo de trabajo ha sido agregado')
      } catch (error) {
        console.log(error);
      }
    })()
  }

  function handleInputChange(e) {
    setNewjob((job) => ({
      newJob: e.target.value,
    }));
  }

  return (
    <>
    <div className='addJob'>
    <input
            type="text"
            className="form-control"
            name="newJob"
            placeholder="Nuevo trabajo..."
            autoComplete='off'
            onChange={(e) => handleInputChange(e)}
          />
            <Button onClick={(e) => handleClick(e)}>
              Agregar
            </Button>
    </div>
    </>
  );
}

export default NewJobType;
