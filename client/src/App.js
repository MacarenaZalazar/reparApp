import "./App.css";
import { Route, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";

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
    </div>
  );
}

export default App;
