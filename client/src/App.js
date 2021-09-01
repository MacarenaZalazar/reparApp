import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import DisplayFilters from "./components/DisplayFilters/DisplayFilters";
import FormTechnicUser from "./components/FormTechnicalUser/FormTechnicUser";
import FormUser from "./components/FormUser/FormUser";
import NavBar from "./containers/NavBar/NavBar";

function App() {
  return (
    <div>
      <Route>
        <NavBar />
      </Route>
      <Route path="/home">
        <DisplayFilters />
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
