import React, { useState } from "react";
import Button from 'react-bootstrap/Button'
import axios from 'axios';

function NewJobType() {
  const [newJob, setNewjob] = useState("");

  function handleClick(e) {
    e.preventDefault();
    return async () => {
        try {
        await axios.put(ADMIN_URL, newJob);
        alert('El tipo de trabajo ha sido agregado')
      } catch (error) {
        console.log(error);
      }
    }
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
            <Button onClick={handleClick}>
              Agregar
            </Button>
    </div>
    </>
  );
}

export default NewJobType;
