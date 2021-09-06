import React from "react";
import DisplayFilters from "../DisplayFilters/DisplayFilters";
import TechnicUsers from "../TechnicUsers/TechnicUsers";
import { StyledDiv } from "./Styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { getTechUsersAll } from "../../redux/actions/techUsers/index";

const Home = () => {
  const dispatch = useDispatch();
  const {techUsers} = useSelector(state => state)
  useEffect(() => {
  }, []);
      return ( 
        <StyledDiv>
          {techUsers ? 
            <>
              <DisplayFilters />
              <TechnicUsers />
            </> : <span>Cargando...</span> }
        </StyledDiv>
        );
};

export default Home;
