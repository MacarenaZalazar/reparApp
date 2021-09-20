import React, { useState, useMemo } from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button'
import { ADMIN_URL } from "../../utils/constants";
import axios from 'axios'


const DeleteJobType = () => {
    const [newJob, setNewJob] = useState('')
    const jobTypes = useSelector((state) => state.jobTypes);
    const userString = window.sessionStorage.getItem("user");
    const useR = JSON.parse(userString);
    console.log(useR)
    const config = useMemo(()=> {
      return {
        headers: {
          "x-access-token": useR && useR.token,
        },
      };
    }, [useR])
    const handleChange = (e) => {
        setNewJob({newJob: e.target.value})
    }

    const handleClick = async (e) =>{
        console.log('toy ak perro')
            try {
            await axios.delete(ADMIN_URL, newJob, config);
            alert('El tipo de trabajo ha sido eliminado')
          } catch (error) {
            console.log(error);
          }
        
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
            <Button onClick={(e)=>handleClick(e)}>Eliminar</Button>
            </div>
        </div>
    );
};

export default DeleteJobType;