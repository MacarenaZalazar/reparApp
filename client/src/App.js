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
import Dashboard from "./containers/userAdmin/Dashboard";

function App() {
  const userString = window.sessionStorage.getItem("user");
  const user = JSON.parse(userString);

  return (
    <div className="appContainer">
      <Route>
        <NavBar />
      </Route>
      <Route exact path="/login">
        {user ? <ContactUs /> : <Login />}
      </Route>

      <Route exact path="/signinTech">
        <SigninTech />
      </Route>
      <Route exact path="/signinfinal">
        <SigninFinal />
      </Route>
      <Route exact path="/">
        <Hero />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/finalUserDetails/:id" component={finalUserDetails} />
      <Route
        exact
        path="/technicUserDetails/:Id"
        component={TechnicUserDetails}
      />
      <Route exact path="/contacto">
        <ContactUs />
      </Route>
      <Route exact path="/about">
        <AboutUs />
      </Route>
      <Route exact path="/faq">
        {/* <Faq/> */}
        <FaqPage />
      </Route>
      <Route exact path="/admin">
        <Dashboard />
      </Route>

      <Footer />
    </div>
  );
}

export default App;
