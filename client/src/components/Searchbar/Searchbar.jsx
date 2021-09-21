import React, { useState, useEffect } from "react";
import { StyledDiv, SearchBarDiv, ItemDiv } from "./SearchbarStyles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getCities,
  getStates,
  getTechUsersByJobAndZone,
} from "../../redux/actions/techUsers/index";
import { getRequestAllFiltered } from "../../redux/actions/request/index";

const Searchbar = () => {
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);

  const dispatch = useDispatch();

  const [jobTypesInput, setJobTypesInput] = useState("");
  const [state, setState] = useState([]);
  const [citie, setCitie] = useState([]);
  const { allStates, allCities, jobTypes } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getStates());
  }, [dispatch]);

  const handleJobTypes = (e) => {
    setJobTypesInput(e.target.value);
  };

  const handleChangeState = (e) => {
    dispatch(getCities(e.target.value));
    setState(e.target.value);
  };

  function handleChangeCitie(e) {
    setCitie(e.target.value);
  }

  const handleClick = () => {
    if (userSession && userSession.roles === "userFinal") {
      dispatch(getTechUsersByJobAndZone(jobTypesInput, state, citie));
    } else if (userSession && userSession.roles === "userTech") {
      dispatch(getRequestAllFiltered(jobTypesInput, state, citie));
    } else {
      dispatch(getTechUsersByJobAndZone(jobTypesInput, state, citie));
      dispatch(getRequestAllFiltered(jobTypesInput, state, citie));
    }
  };

  return (
    <StyledDiv data-aos="fade-right">
      <SearchBarDiv>
        <ItemDiv>
          <p>¿Qué necesitas?</p>
          <select
            className="form-select"
            aria-label="Default select example"
            name="jobTypesInput"
            onChange={(e) => handleJobTypes(e)}
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
            onChange={(e) => handleChangeState(e)}
            name="state"
            id=""
          >
            <option value=""></option>
            {allStates &&
              allStates.length > 0 &&
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
              onChange={(e) => handleChangeCitie(e)}
            >
              <option value=""></option>
              {allCities.map((d, idx) => {
                return (
                  <option key={idx} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          )}

          <Link onClick={(e) => handleClick(e)} className="link" to="/home">
            <p>¡Buscá!</p>
          </Link>
        </ItemDiv>
      </SearchBarDiv>
    </StyledDiv>
  );
};

export default Searchbar;
