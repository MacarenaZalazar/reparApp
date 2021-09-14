import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, allow, ...rest }) => {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  if (allow) {
    return (
      <Route {...rest}>
        {user && user.roles && user.roles[0].name === (allow || "admin") ? (
          <Component />
        ) : (
          <Redirect to="/home" />
        )}
      </Route>
    );
  } else {
    return (
      <Route {...rest}>{!user ? <Component /> : <Redirect to="/home" />}</Route>
    );
  }
};

export default PrivateRoute;
