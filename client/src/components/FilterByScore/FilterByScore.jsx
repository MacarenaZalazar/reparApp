import React from "react";
//import { getScore,filterByScore} from "../../actions/index";
import { StyledDiv, FilterDiv, ContentFilter, Icon } from "./Styles";
import { useDispatch } from "react-redux";
import {
  orderByScore,
  orderByRelevant,
  orderByPrice,
} from "../../redux/actions/allUsers/index";

import { RiArrowUpDownLine } from "react-icons/ri";

export default function FilterByScore() {
  const dispatch = useDispatch();

  const handleFilterScore = (e) => {
    const order = e.target.value;
    if (order === "más reelevantes") {
      dispatch(orderByRelevant());
    } else if (order === "mejor puntuados") {
      dispatch(orderByScore());
    } else if (order === "menor precio") {
      dispatch(orderByPrice());
    }
  };

  return (
    <StyledDiv>
      <FilterDiv>
        <RiArrowUpDownLine className="icon" />

        <ContentFilter>
          <p>Filtrar</p>
          <select onChange={(e) => handleFilterScore(e)}>
            <option value="all">Todos</option>
            <option value="más reelevantes">más relevantes</option>
            <option value="mejor puntuados">mejor puntuados</option>
            <option value="menor precio">menor precio</option>
          </select>
        </ContentFilter>
      </FilterDiv>
    </StyledDiv>
  );
}
