import React, { useState } from "react";
import UpdateJobTypes from "../../components/Admin/UdateJobTypes";
import NewJobType from '../../components/Admin/NewJobType'
import { useDispatch, useSelector } from "react-redux";
import {DeleteJobType} from '../../redux/actions/admin/index';
import { getJobTypesAll } from "../../redux/actions/jobTypes/index";

import "./css.css";
function Dashboard() {
  var jobTypes = useSelector((state) => state.jobTypes);
var dispatch = useDispatch();

  function handleChange(n) {
    dispatch(DeleteJobType(n))
    console.log(n);
  }
  
  return (
    <div className="container conta-JobType">
      <div className="row">
        <div className="col-sm">
          {/* <UpdateJobTypes /> */}
          {/* falta la ruta del get de job types */}
          {
            jobTypes &&
            jobTypes.map((job, key) => {
            return <form onSubmit={handleChange(job)}>
            <UpdateJobTypes key={key} name={job} /> 
            <button type="submit" class="btn btn-danger mt-4 w-50 justify-content-center " >
            Delete
          </button>
          </form>
            
          })
          }
        </div>
        <div className="col-sm">
            <NewJobType/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
