import "./App.css";
import { Route, Switch } from "react-router-dom";

import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import Searchbar from "./components/Searchbar/Searchbar";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";


function App() {
  return (
    <div className="App">
      <Route>
        <Searchbar />
      </Route>
      <Route exact path="/finalUserDetails:id" component={finalUserDetails} />
      <Route
        exact
        path="/technicUserDetails:Id"
        component={technicUserDetails}
      />
    </div>
  );
}

export default App;
