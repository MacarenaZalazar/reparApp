import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddJobType } from "../../redux/actions/admin/index";
function NewJobType() {
  const dispatch = useDispatch();

  const [newJob, setNewjob] = useState("");

  function handleOnSubmit(e) {
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
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <div class="form-group ">
          <label for="exampleInputEmail1">JobType Name</label>
          <input
            type="text"
            class="form-control"
            name="newJob"
            placeholder="New Name"
            onChange={(e) => handleInputChange(e)}
          />
          <div className=" d-flex justify-content-center">
            <button type="submit" class="btn btn-success mt-4 w-50 ">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewJobType;
