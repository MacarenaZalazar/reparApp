import "./App.css";
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import Searchbar from "./components/Searchbar/Searchbar";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import DisplayFilters from './components/DisplayFilters/DisplayFilters';
import FormTechnicUser from "./components/FormTechnicalUser/FormTechnicUser";
import FormUser from "./components/FormUser/FormUser";


function App() {
  return (
    <div className="App">
      <Route>
        <Searchbar />
      </Route>
      <Route path='/home'>
        <DisplayFilters/>
      </Route>
      <Route exact path="/finalUserDetails:id" component={finalUserDetails} />
      <Route
        exact
        path="/technicUserDetails:Id"
        component={technicUserDetails}
      />
      <Route exact path='/userForm'>
        <FormUser/>
      </Route>
      <Route exact path='/technicForm'>
        <FormTechnicUser/>
      </Route>
    </div>
  );
}

export default App;
