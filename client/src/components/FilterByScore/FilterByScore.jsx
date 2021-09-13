import React, {useState} from "react";
//import { getScore,filterByScore} from "../../actions/index";
import { StyledDiv } from "./Styles";
import { useDispatch } from 'react-redux';


export default function FilterByScore() {
  const [order, setOrder] = useState('')
  const dispatch = useDispatch();

  const handleFilterScore = (e) => {
    //dispatch(filterByScore(e.target.value));
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
          <option value="más reelevantes">más relevantes</option>
          <option value="mejor puntuados">mejor puntuados</option>
          <option value="menor precio">menor precio</option>
        </select>
      </div>
    </StyledDiv>
  );
}
