import React from "react";
//import { getScore,filterByScore} from "../../actions/index";
import { StyledDiv } from "./Styles";
import { useDispatch } from 'react-redux';
import { orderByScore, orderByPrice } from '../../redux/actions/allUsers/index';


export default function FilterByScore() {
  const dispatch = useDispatch();

  const handleFilterScore = (e) => {
    const order = e.target.value
    if(order === 'mejor puntuados'){
      dispatch(orderByScore())
    } else if(order === 'menor precio'){
      dispatch(orderByPrice())  
    }
  };

  return (
    <StyledDiv>
      {/* <label>Puntaje</label> */}
      <div>
        <select
          className="form-select form-select-sm"
          onChange={(e) => handleFilterScore(e)}
        >
          <option value="all">Todos</option>
          <option value="mejor puntuados">mejor puntuados</option>
          <option value="menor precio">menor precio</option>
        </select>
      </div>
    </StyledDiv>
  );
}
