import React from "react";
import {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getScore,filterByScore} from "../../actions/index";

export default function FilterByScore() {

  const dispatch = useDispatch();
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

      <h4>Puntaje</h4>
          <div>
            <select onChange={e => handleFilterScore(e)}> 
              <option value="all">Todos</option>        
              {allScores.map((el) => { 
                    return (
                          <option value={el}>{el}</option>                
                   );
              })}
            </select>
          </div>

      );
}