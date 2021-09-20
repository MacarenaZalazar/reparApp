import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddJobType } from "../../redux/actions/admin/index";
import Button from 'react-bootstrap/Button'

function NewJobType() {
  const dispatch = useDispatch();

  const [newJob, setNewjob] = useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log(newJob)
    dispatch(AddJobType(newJob));
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
