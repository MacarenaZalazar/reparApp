import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getScore,filterByScore} from "../../actions/index";
import { StyledDiv } from './Styles';

export default function FilterByScore() {

  //const dispatch = useDispatch();
/*
  useEffect(() => {
       dispatch(getScore());
   }, []);
*/
  //const allScores=useSelector((state)=> state.scores);

  const handleFilterScore = (e) => {
      //dispatch(filterByScore(e.target.value)); 
  }; 
 

    return(
      <StyledDiv>
      <label>Puntaje</label>
          <div>
            <select className='form-select form-select-sm' onChange={e => handleFilterScore(e)}> 
              <option value="all">Todos</option>        
              {/* {allScores.map((el) => { 
                    return (
                          <option value={el}>{el}</option>                
                   );
              })} */}
            </select>
          </div>
      </StyledDiv>
      );
}