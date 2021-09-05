import React from "react";
import DisplayFilters from "../DisplayFilters/DisplayFilters";
import TechnicUsers from "../TechnicUsers/TechnicUsers";
import { StyledDiv } from "./Styles";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTechUsersAll } from "../../redux/actions/techUsers/index";

const Home = () => {
  const dispatch = useDispatch();
  const techUsers = useSelector((state) => state.techUsers);

  useEffect(() => {
    dispatch(getTechUsersAll());
    console.log("estoy en home:", techUsers);
  }, []);
  return (
    <StyledDiv>
      <DisplayFilters />
      <TechnicUsers />
    </StyledDiv>
  );
};

export default Home;
