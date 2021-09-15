import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
function LoginGoogle() {
  const history = useHistory();

  const responseGoogle = (response) => {
    console.log(response);
    history.push("/home");
    // console.log(response.profileObj);
  };
  const url =
    "497367320284-qb9liem9l8i7mdroc6ci4ujm2vsftnj9.apps.googleusercontent.com";

  return (
    <>
      <GoogleLogin
        clientId={url}
        buttonText="Iniciar Sesion"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        theme="dark"
      />
    </>
  );
}

export default LoginGoogle;
