import React from "react";
import { useDispatch } from "react-redux";

function UpdateJobTypes({ name }) {
  // const [deleteJob, setDeletejob] = useState('')

  // function handleChange(n) {
  //   dispatch(DeleteJobType(n))
  //   // console.log(name);
  // }

  // useEffect(() => {
  //   dispatch(getJobTypesAll());
  // }, [handleChange]);
  return (
    <>
      <div class="card" style={{ width: 18 + "rem" }}>
        <div class="card-body bg-dark d-flex ">
          <h5 class="card-title text-light">{name}</h5>
          {/* <button type="butttom" class="btn btn-danger mt-4 w-50 justify-content-center " onClick={handleChange(name)}>
              Delete
            </button> */}
        </div>
      </div>
    </>
  );
}

export default UpdateJobTypes;
