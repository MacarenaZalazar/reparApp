import { Route } from "react-router-dom";
import TechnicUserDetails from "./components/TechnicUserDetails/TechnicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import NavBar from "./containers/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Login from "./components/Login/Login";
import SigninTech from "./containers/SigninTech/SigninTech";
import SigninFinal from "./containers/SigninFinal/SigninFinal";

function App() {
  return (
    <div className="appContainer">
      <Route>
        <NavBar />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/signinTech">
        <SigninTech />
      </Route>
      <Route exact path="/signinfinal">
        <SigninFinal />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/finalUserDetails/:id" component={finalUserDetails} />
      <Route
        exact
        path="/technicUserDetails/:Id"
        component={TechnicUserDetails}
      />
    </div>
  );
}

export default App;
