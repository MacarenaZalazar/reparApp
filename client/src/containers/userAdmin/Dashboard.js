import React from "react";
import UpdateJobTypes from "../../components/Admin/UdateJobTypes";
import NewJobType from "../../components/Admin/NewJobType";
import { useDispatch, useSelector } from "react-redux";
import { DeleteJobType } from "../../redux/actions/admin/index";

import "./css.css";
function Dashboard() {
  const jobTypes = useSelector((state) => state.jobTypes);
  const dispatch = useDispatch();

  function handleChange(n) {
    dispatch(DeleteJobType(n));
  }

  return (
    <div className="container conta-JobType">
      <div className="row">
        <div className="col-sm">
          {jobTypes &&
            jobTypes.map((job, key) => {
              return (
                <form onSubmit={handleChange(job)}>
                  <UpdateJobTypes key={key} name={job} />
                  <button
                    type="submit"
                    class="btn btn-danger mt-4 w-50 justify-content-center "
                  >
                    Delete
                  </button>
                </form>
              );
            })}
        </div>
        <div className="col-sm">
          <NewJobType />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
