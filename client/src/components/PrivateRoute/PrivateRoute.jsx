import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, allow, ...rest }) => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  if (allow) {
    console.log(allow);
    console.log(user.roles[0].name);
    return (
      <Route {...rest}>
        {user.roles[0].name === allow ? <Component /> : <Redirect to="/home" />}
      </Route>
    );
  } else {
    return (
      <Route {...rest}>{!user ? <Component /> : <Redirect to="/home" />}</Route>
    );
  }
};

export default PrivateRoute;
