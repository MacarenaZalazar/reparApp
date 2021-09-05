import React, { useState } from "react";
import { StyledDiv, SearchBarDiv, ItemDiv } from "./SearchbarStyles";
import { Link } from "react-router-dom";
import { jobs } from "../../utils/mockData";
import { useDispatch } from 'react-redux';
import { getTechUsersByJobAndZone } from '../../redux/actions/techUsers/index';

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");
 
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("input on change");
  };
  const handleSelect = (e) => {
    console.log(e)
    setSelect(e.target.value);
    console.log("select on change");
  };
  const handleClick = (e) => {
    dispatch(getTechUsersByJobAndZone(select, input));
    setInput("");
  };

  return (
    <StyledDiv>
      <SearchBarDiv>
        <ItemDiv>
          <p>¿Qué necesitas?</p>
          <select name="jobs" onChange={handleSelect}>
            <option value=""></option>
            {jobs.map((j, idx) => {
              return <option value={j} key={idx}>{j}</option>
            })}
          </select>
        </ItemDiv>
        <ItemDiv>
          <p>¿Dónde?</p>
          <input type="text" value={input} onChange={handleChange} />
          <Link className="link" to="/home">
            <p onClick={handleClick}>Buscá!</p>
          </Link>
        </ItemDiv>
      </SearchBarDiv>
    </StyledDiv>
  );
};

export default Searchbar;
