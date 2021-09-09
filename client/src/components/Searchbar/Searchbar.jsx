import React, { useState, useEffect } from "react";
import { StyledDiv, SearchBarDiv, ItemDiv } from "./SearchbarStyles";
import { Link } from "react-router-dom";
import { jobs } from "../../utils/mockData";
import { useDispatch, useSelector } from "react-redux";
import {
  getCities,
  getStates,
  getTechUsersByJobAndZone,
} from "../../redux/actions/techUsers/index";

const Searchbar = () => {
  const [select, setSelect] = useState("");
  //const [states, setStates] = useState([])
  //const [cities, setCities] = useState([])
  const dispatch = useDispatch();
  const { allStates, allCities } = useSelector((state) => state);
  const jobTypes = useSelector((state) => state.jobTypes);

  useEffect(() => {
    dispatch(getStates());
  }, []);

  const handleChange = (e) => {
    dispatch(getCities(e.target.value));
  };
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  const handleClick = () => {
    console.log(select);
    dispatch(getTechUsersByJobAndZone(select, ""));
  };

  return (
    <StyledDiv>
      <SearchBarDiv>
        <ItemDiv>
          <p>¿Qué necesitas?</p>
          <select
            className="form-select"
            aria-label="Default select example"
            name="jobs"
            onChange={handleSelect}
          >
            <option value=""></option>
            {jobTypes &&
              jobTypes.map((j, idx) => {
                return (
                  <option value={j} key={idx}>
                    {j}
                  </option>
                );
              })}
          </select>
        </ItemDiv>
        <ItemDiv>
          <p>¿Dónde?</p>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={handleChange}
            name="provincias"
            id=""
          >
            <option value=""></option>
            {allStates &&
              allStates.map((c, idx) => {
                return (
                  <option key={idx} value={c}>
                    {c}
                  </option>
                );
              })}
          </select>

          {allCities.length > 1 && (
            <select
              className="form-select"
              aria-label="Default select example"
              name="departments"
              id=""
            >
              {allCities.map((d, idx) => {
                return (
                  <option key={idx} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          )}

          <Link className="link" to="/home">
            <p onClick={handleClick}>Buscá!</p>
          </Link>
        </ItemDiv>
      </SearchBarDiv>
    </StyledDiv>
  );
};

export default Searchbar;
