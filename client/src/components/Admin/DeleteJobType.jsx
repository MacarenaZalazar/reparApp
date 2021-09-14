import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteJobType } from "../../redux/actions/admin/index";


const DeleteJobType = () => {
    const [job, setJob] = useState('')
    const jobTypes = useSelector((state) => state.jobTypes);
    const dispatch = useDispatch();

    function handleChange(e){
        setJob(e.target.value)
    }

    function handleClick() {
      dispatch(deleteJobType(job));
    }
  
    return (
        <div>
            <div>
            {jobTypes &&
            <select onChange={handleChange} name="jobtypes" >
                <option value="">Seleccioná para eliminar</option>
            {jobTypes.map((job, key) => {
                return (
                    <option value={job} key={key}>{job}</option>)
                })}
            </select>
            }
            <button onClick={handleClick}>Eliminar</button>
            </div>
        </div>
    );
};

export default DeleteJobType;