import { Route, Switch } from "react-router-dom";
import technicUserDetails from "./components/technicUserDetails/technicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import FormTechnicUser from "./components/FormTechnicalUser/FormTechnicUser";
import FormUser from "./components/FormUser/FormUser";
import NavBar from "./containers/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import './AppStyles.css'
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className='appContainer'>
      <Route>
        <NavBar />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/home">
        <Home />
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
