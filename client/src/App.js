import "./App.css";
import { Route, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";

function App() {
  return (
    <div className="App">
      <Route>
        <Searchbar />
      </Route>
      <Route
        exact
        path="/technicUserDetails:Id"
        component={technicUserDetails}
      />
      <Route exact path="/finalUserDetails:id" component={finalUserDetails} />
    </div>
  );
}

export default App;
