import React, { useState } from "react";
import { StyledDiv, SearchBarDiv, ItemDiv } from "./SearchbarStyles";
import { Link } from "react-router-dom";

const Searchbar = () => {
  const [input, setInput] = useState("");
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log("input on change");
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
    console.log("select on change");
  };
  const handleClick = (e) => {
    const filter = [select, input];
    setInput("");
  };

  return (
    <StyledDiv>
      <SearchBarDiv>
        <ItemDiv>
          <p>¿Qué necesitas?</p>
          <select name="oficios" handleChange={handleSelect}>
            <option value=""></option>
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
