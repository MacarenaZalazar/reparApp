import React from "react";
import DisplayFilters from "../DisplayFilters/DisplayFilters";
import TechnicUsers from "../TechnicUsers/TechnicUsers";
import WorkOrders from "../WorkOrders/WorkOrders";
import { StyledDiv, SinUser, HomeDiv } from "./Styles";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getStates, getCities } from "../../redux/actions/techUsers";
import { Link } from "react-router-dom";
//import { getTechUsersAll } from "../../redux/actions/techUsers/index";
import PromotedUsers from "../PromotedUsers/PromotedUsers";

const Home = () => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStates());
    dispatch(getCities());
  }, [dispatch]);

  return (
    <StyledDiv className="container">
      {user &&
      user.hasOwnProperty("roles") &&
      user.roles[0].name === "userFinal" ? (
        <div className="flexHome">
          <div className="display">
            <DisplayFilters />
          </div>
          <PromotedUsers />
          <TechnicUsers />
        </div>
      ) : user &&
        user.hasOwnProperty("roles") &&
        user.roles[0].name === "userTech" ? (
        <div className="flexHome">
          <div className="display">
            <DisplayFilters />
          </div>
          <WorkOrders />
        </div>
      ) : (
        <HomeDiv>
          <DisplayFilters />
          <SinUser>
            <div className="cardsDisplay">
              <h2>Usuarios Tecnicos</h2>
              <PromotedUsers />
              <TechnicUsers />
              <h2>Pedidos de trabajo</h2>
              <WorkOrders />
            </div>
          </SinUser>
        </HomeDiv>
      )}
    </StyledDiv>
  );
};

export default Home;
