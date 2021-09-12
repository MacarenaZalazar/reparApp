import { Route, Switch } from "react-router-dom";

import TechnicUserDetails from "./components/TechnicUserDetails/TechnicUserDetails";
import FinalUserDetails from "./components/finalUserDetails/FinalUserDetails";
import NavBar from "./containers/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Login from "./components/Login/Login";
import SigninTech from "./containers/SigninTech/SigninTech";
import SigninFinal from "./containers/SigninFinal/SigninFinal";
import AboutUs from "./containers/AboutUs/AboutUs";
import ContactUs from "./containers/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";


// import PerfilUserFinal from "./components/PerfilUserFinal/PerfilUserFinal";
import ProfileUserFinal from "./containers/FinalUserProfile/ProfileUserFinal";


// import Faq from "./components/faq/Faq";
import FaqPage from "./containers/faqPage/FaqPage";
import Error404 from "./containers/Error404/Error404";
import CreateWorkOrder from "./containers/CreateWorkOrder/CreateWorkOrder";

import Dashboard from "./containers/UserAdmin/Dashboard";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { getJobTypesAll } from "./redux/actions/jobTypes";
import { useDispatch, useSelector } from "react-redux";

// jose estuvo aquí

function App() {
  const dispatch = useDispatch();
  const jobTypes = useSelector((state) => state.jobTypes);

  useEffect(() => {
    if (!jobTypes.length) {
      dispatch(getJobTypesAll());
    }
  }, [dispatch]);

  return (
    <div className="appContainer">
      <Route path="/" component={NavBar} />

      <Switch>
        <PrivateRoute exact path="/login" component={Login} />

        <PrivateRoute exact path="/signinTech" component={SigninTech} />

        <PrivateRoute exact path="/signinfinal" component={SigninFinal} />

        <Route exact path="/newWorkOrder" component={CreateWorkOrder} />

        <Route exact path="/" component={Hero} />

        <Route exact path="/home" component={Home} />

        <Route
          exact
          path="/finalUserDetails/:id"
          component={FinalUserDetails}
        />

        <Route
          exact
          path="/technicUserDetails/:Id"
          component={TechnicUserDetails}
        />

        <Route exact path="/contacto" component={ContactUs} />

        <Route exact path="/about" component={AboutUs} />

        <Route exact path="/faq" component={FaqPage} />

        <Route exact path="/admin" component={Dashboard} />

        <Route exact path="/usuarioFinal" component={ProfileUserFinal} />
        
        <Route path="*" component={Error404} />
      </Switch>

      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
