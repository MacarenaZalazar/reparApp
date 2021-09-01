import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getZone,getJob,filterByZone,filterByJob} from "../../actions/index";
import { StyledDiv } from './Styles';


export default function FilterByZoneAndJob() {

	//const dispatch = useDispatch();
/*
	useEffect(() => {
       dispatch(getZone());
       dispatch(getJob());
   }, []);
*/
	//const allZones=useSelector((state)=> state.zones);
	//const allJobs=useSelector((state)=> state.jobs);

	const handleFilterZone = (e) => {
      //dispatch(filterByZone(e.target.value)); 
  }; 

  const handleFilterJob = (e) => {
      //dispatch(filterByJob(e.target.value)); 
  }; 


  	return(
      <>
      
      <StyledDiv>
        <label>Zonas</label>
              <select className='form-select form-select-sm'onChange={e => handleFilterZone(e)}> 
                <option value="all">Todas</option>        
                {/* {allZones.map((el) => { 
                      return (
                            <option value={el}>{el}</option>                
                    );
                })} */}
              </select>

{/*---------------------------------------------------*/}

      <label>Trabajo</label>
                <select className='form-select form-select-sm' onChange={e => handleFilterJob(e)}> 
                  <option value="all">Todos</option>        
                  {/* {allJobs.map((el) => { 
                        return (
                              <option value={el}>{el}</option>                
                      );
                  })}  */}
                </select>
        </StyledDiv>
      </>

  		);
}