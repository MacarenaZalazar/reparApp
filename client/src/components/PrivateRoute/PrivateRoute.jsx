import { Redirect, Route } from "react-router";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const history = useHistory();

  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  return (
    <Route {...rest}> {!user ? <Component /> : <Redirect to="/home" />} </Route>
  );
};

export default PrivateRoute;
