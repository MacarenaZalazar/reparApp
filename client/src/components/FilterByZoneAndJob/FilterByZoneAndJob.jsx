import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersByJobAndZone } from "../../redux/actions/techUsers";
import { StyledDiv } from "./Styles";
import { jobs } from "../../utils/mockData";

export default function FilterByZoneAndJob() {
  const dispatch = useDispatch();
  const { allStates } = useSelector((state) => state);

  const handleFilterZone = (e) => {
    dispatch(getTechUsersByJobAndZone("", e.target.value));
  };

  const handleFilterJob = (e) => {
    dispatch(getTechUsersByJobAndZone(e.target.value, ""));
  };

  return (
    <>
      <StyledDiv>
        <label>Trabajo</label>
        <select
          className="form-select form-select-sm"
          onChange={(e) => handleFilterJob(e)}
        >
          <option value="all">Todos</option>
          {jobs.map((el, idx) => {
            return (
              <option key={idx} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </StyledDiv>
      <StyledDiv>
        <label>Zonas</label>
        <select className="form-select" onChange={(e) => handleFilterZone(e)}>
          <option value="all">Todas</option>
          {allStates.map((el, idx) => {
            return (
              <option key={idx} value={el}>
                {el}
              </option>
            );
          })}
        </select>
      </StyledDiv>
    </>
  );
}
