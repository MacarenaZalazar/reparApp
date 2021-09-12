import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  return (
    <Route {...rest}> {!user ? <Component /> : <Redirect to="/home" />} </Route>
  );
};

export default PrivateRoute;
