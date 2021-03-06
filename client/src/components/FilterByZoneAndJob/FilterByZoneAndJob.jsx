import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { jobs } from "../../utils/mockData";
import { getRequestAllFiltered } from "../../redux/actions/request/index";
import { getCities } from "../../redux/actions/techUsers/index";
import { FaFilter } from "react-icons/fa";
import { StyledDiv, FilterDiv, ContentFilter } from "./Styles";

export default function FilterByZoneAndJob() {
  const userString = window.sessionStorage.getItem("user");
  const userSession = JSON.parse(userString);
  const dispatch = useDispatch();
  const [job, setJob] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const { allStates, allCities } = useSelector((state) => state);

  const handleFilterState = (e) => {
    setState(e.target.value);
    if (userSession && userSession.roles === "userFinal") {
      dispatch(getTechUsersByJobAndZone(job, e.target.value, city));
    } else if (userSession && userSession.roles === "userTech") {
      dispatch(getRequestAllFiltered(job, e.target.value, city));
    } else {
      dispatch(getTechUsersByJobAndZone(job, e.target.value, city));
      dispatch(getRequestAllFiltered(job, e.target.value, city));
    }
    dispatch(getCities(e.target.value));
  };

  const handleFilterJob = (e) => {
    setJob(e.target.value);
    if (userSession && userSession.roles === "userFinal") {
      dispatch(getTechUsersByJobAndZone(e.target.value, state, city));
    } else if (userSession && userSession.roles === "userTech") {
      dispatch(getRequestAllFiltered(e.target.value, state, city));
    } else {
      dispatch(getTechUsersByJobAndZone(e.target.value, state, city));
      dispatch(getRequestAllFiltered(e.target.value, state, city));
    }
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (userSession && userSession.roles === "userFinal") {
      dispatch(getTechUsersByJobAndZone(job, state, e.target.value));
    } else if (userSession && userSession.roles === "userTech") {
      dispatch(getRequestAllFiltered(job, state, e.target.value));
    } else {
      dispatch(getTechUsersByJobAndZone(job, state, e.target.value));
      dispatch(getRequestAllFiltered(job, state, e.target.value));
    }
  };

  return (
    <StyledDiv>
      <FilterDiv>
        <div className="front">
          <FaFilter className="icon" />
          <p>Filtrar</p>
        </div>
        <div className="flexFilter">
          <ContentFilter>
            <p>Trabajo</p>
            <select onChange={(e) => handleFilterJob(e)}>
              <option value="">Todos</option>
              {jobs.map((el, idx) => {
                return (
                  <option key={idx} value={el}>
                    {el}
                  </option>
                );
              })}
            </select>
          </ContentFilter>
          <ContentFilter>
            <p>Zonas</p>
            <div className="flexSelect">
              <select onChange={(e) => handleFilterState(e)}>
                <option value="">Todas</option>
                {allStates.map((el, idx) => {
                  return (
                    <option key={idx} value={el}>
                      {el}
                    </option>
                  );
                })}
              </select>
              {allCities.length > 1 && (
                <select
                  className="form-select form-select-sm"
                  onChange={handleCityChange}
                  name="cities"
                  id=""
                >
                  <option value=""></option>
                  {allCities.map((el, idx) => {
                    return (
                      <option value={el} key={idx}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              )}
            </div>
          </ContentFilter>
        </div>
      </FilterDiv>
    </StyledDiv>
  );
}
