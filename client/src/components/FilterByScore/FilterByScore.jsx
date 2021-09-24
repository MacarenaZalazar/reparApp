import React from "react";
import { StyledDiv, FilterDiv, ContentFilter, Icon } from "./Styles";
import { useDispatch } from "react-redux";
import { orderByScore, orderByPrice } from "../../redux/actions/allUsers";
import { RiArrowUpDownLine } from "react-icons/ri";

export default function FilterByScore() {
  const dispatch = useDispatch();

  const handleFilterScore = (e) => {
    const order = e.target.value;
    if (order === "mejor puntuados") {
      dispatch(orderByScore());
    } else if (order === "menor precio") {
      dispatch(orderByPrice());
    }
  };

  return (
    <StyledDiv>
      <FilterDiv>
        <div className="front">
          <RiArrowUpDownLine className="icon" />
          <p>Ordenar</p>
        </div>
        <ContentFilter>
          <p>Según</p>
          <select onChange={(e) => handleFilterScore(e)}>
            <option value="mejor puntuados">Mejor puntuados</option>
            <option value="menor precio">Menor precio</option>
          </select>
        </ContentFilter>
      </FilterDiv>
    </StyledDiv>
  );
}
