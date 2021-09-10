import { Route } from "react-router-dom";

import TechnicUserDetails from "./components/TechnicUserDetails/TechnicUserDetails";
import finalUserDetails from "./components/finalUserDetails/finalUserDetails";
import NavBar from "./containers/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Login from "./components/Login/Login";
import SigninTech from "./containers/SigninTech/SigninTech";
import SigninFinal from "./containers/SigninFinal/SigninFinal";
import AboutUs from "./containers/AboutUs/AboutUs";
import ContactUs from "./containers/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
// import Faq from "./components/faq/Faq";
import FaqPage from "./containers/faqPage/FaqPage";

import Dashboard from "./containers/UserAdmin/Dashboard";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { getJobTypesAll } from "./redux/actions/jobTypes";
import { useDispatch } from "react-redux";



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobTypesAll());
  }, []);

  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  return (
    <div className="appContainer">
      <Route path="/" component={NavBar} />

      {/* <Route exact path="/login" component={Login} /> */}
      <PrivateRoute exact path="/login" component={Login} />

      <Route exact path="/signinTech" component={SigninTech} />

      <Route exact path="/signinfinal" component={SigninFinal} />

      <Route exact path="/" component={Hero} />

      <Route exact path="/home" component={Home} />

      <Route exact path="/finalUserDetails/:id" component={finalUserDetails} />

      <Route
        exact
        path="/technicUserDetails/:Id"
        component={TechnicUserDetails}
      />

      <Route exact path="/contacto" component={ContactUs} />

      <Route exact path="/about" component={AboutUs} />

      <Route exact path="/faq" component={FaqPage} />

      <Route exact path="/admin">
        <Dashboard />
      </Route>
      <Route path="/" component={Footer} />

    </div>
  );
}

export default App;
