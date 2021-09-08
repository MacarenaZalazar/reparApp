import React,{useState} from 'react'
import UpdateJobTypes from '../../components/Admin/UpdateJobTypes';
import {useDispatch,useSelector} from 'react-redux'
function Dashboard() {
    var jobTypes = useSelector(state => state.jobTypes)
    var dispatch = useDispatch();

    return (
        <div className="container-fluid">
            <UpdateJobTypes/>
            {/* falta la ruta del get de job types */}
            {/* {
            jobTypes && jobTypes.map( (job,key) => <UpdateJobTypes key={key} name={job}/>)
            } */}
        </div>
    )
}

export default Dashboard
