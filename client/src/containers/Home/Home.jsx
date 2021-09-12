import React from "react";
import DisplayFilters from "../DisplayFilters/DisplayFilters";
import TechnicUsers from "../TechnicUsers/TechnicUsers";
import WorkOrders from "../WorkOrders/WorkOrders";
import { StyledDiv } from "./Styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStates, getCities } from "../../redux/actions/techUsers";
import { Link } from "react-router-dom";
//import { getTechUsersAll } from "../../redux/actions/techUsers/index";

const Home = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStates());
    dispatch(getCities());
  }, [dispatch]);

  return (
    <StyledDiv>
      {user && user.roles[0].name === "userFinal" && (
        <Link className="link" to="/newWorkOrder">
          Nueva solicitud de trabajo
        </Link>
      )}
      {user.roles[0].name === "userFinal" ? (
        <>
          <DisplayFilters />
          <TechnicUsers />
        </>
      ) : user.roles[0].name === "userTech" ? (
        <>
          <DisplayFilters />
          <WorkOrders />
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </StyledDiv>
  );
};

export default Home;
