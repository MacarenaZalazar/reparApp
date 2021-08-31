import "./App.css";
import { Route, Switch } from "react-router-dom";
import Searchbar from "./components/Searchbar/Searchbar";
import FormTechnicUser from "./components/FormTechnicalUser/FormTechnicUser";

function App() {
  return (
    <div className="App">
      <Route>
        <Searchbar />
      </Route>
    </div>
  );
}

export default App;
