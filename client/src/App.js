import { Route, Switch } from "react-router-dom";
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import DisplayFilters from "./containers/DisplayFilters/DisplayFilters";
import FormTechnicUser from "./components/FormTechnicalUser/FormTechnicUser";
import FormUser from "./components/FormUser/FormUser";
import NavBar from "./containers/NavBar/NavBar";
import TechnicUsers from "./containers/TechnicUsers/TechnicUsers";
import Hero from "./containers/Hero/Hero";
function App() {
  return (
    <div>
      <Route>
        <NavBar />
      </Route>

      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/home">
        <DisplayFilters />
      </Route>
      <Route exact path="/home">
        <TechnicUsers />
      </Route>
      <Route exact path="/finalUserDetails:id" component={finalUserDetails} />
      <Route
        exact
        path="/technicUserDetails:Id"
        component={technicUserDetails}
      />
      <Route exact path="/userForm">
        <FormUser />
      </Route>
      <Route exact path="/technicForm">
        <FormTechnicUser />
      </Route>
    </div>
  );
}

export default App;
