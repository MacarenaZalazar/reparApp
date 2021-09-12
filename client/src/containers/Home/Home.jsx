import React from "react";
import DisplayFilters from "../DisplayFilters/DisplayFilters";
import TechnicUsers from "../TechnicUsers/TechnicUsers";
import WorkOrders from "../WorkOrders/WorkOrders";
import { StyledDiv, SinUser } from "./Styles";
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
      {user &&
        user.hasOwnProperty("roles") &&
        user.roles[0].name === "userFinal" && (
          <Link className="link" to="/newWorkOrder">
            Nueva solicitud de trabajo
          </Link>
        )}
      {user &&
      user.hasOwnProperty("roles") &&
      user.roles[0].name === "userFinal" ? (
        <>
          <DisplayFilters />
          <TechnicUsers />
        </>
      ) : user &&
        user.hasOwnProperty("roles") &&
        user.roles[0].name === "userTech" ? (
        <>
          <DisplayFilters />
          <WorkOrders />
        </>
      ) : (
        <div>
          <DisplayFilters />
          <SinUser>
            <div>
              <h2>Usuarios Tecnicos</h2>
              <TechnicUsers />
            </div>
            <div>
              <h2>Pedidos de trabajo</h2>
              <WorkOrders />
            </div>
          </SinUser>
        </div>
      )}
    </StyledDiv>
  );
};

export default Home;
