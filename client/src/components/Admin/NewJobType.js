import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddJobType } from "../../redux/actions/admin/index";
import Button from 'react-bootstrap/Button'

function NewJobType() {
  const dispatch = useDispatch();

  const [newJob, setNewjob] = useState("");

  function handleClick(e) {
    e.preventDefault();
    dispatch(AddJobType(newJob));
  }

  function handleInputChange(e) {
    setNewjob((job) => ({
      ...job,
      newJob: e.target.value,
    }));
  }

  // useEffect(() => {
  //   dispatch(getJobTypesAll());
  // }, [handleOnSubmit]);

  return (
    <>
    <div className='addJob'>
    <input
            type="text"
            class="form-control"
            name="newJob"
            placeholder="Nuevo trabajo..."
            autoComplete='off'
            onChange={(e) => handleInputChange(e)}
          />
            <Button onClick={handleClick}>
              Agregar
            </Button>
    </div>
      {/* <form onSubmit={(e) => handleOnSubmit(e)}>
        <div class="form-group ">
          <label for="exampleInputEmail1">Agregar nuevo tipo de trabajo</label>
          <input
            type="text"
            class="form-control"
            name="newJob"
            placeholder="Nuevo trabajo..."
            onChange={(e) => handleInputChange(e)}
          />
          <div className=" d-flex justify-content-center">
            <button type="submit" class="btn btn-success mt-4 w-50 ">
              Agregar
            </button>
          </div>
        </div>
      </form> */}
    </>
  );
}

export default NewJobType;
