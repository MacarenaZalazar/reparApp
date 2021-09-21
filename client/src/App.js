import { Route, Switch } from "react-router-dom";

import TechnicUserDetails from "./components/TechnicUserDetails/TechnicUserDetails";
import FinalUserDetails from "./components/FinalUserDetail/FinalUserDetail";
import NavBar from "./containers/NavBar/NavBar";
import Hero from "./containers/Hero/Hero";
import Home from "./containers/Home/Home";
import Login from "./components/Login/Login";
import SigninTech from "./containers/SigninTech/SigninTech";
import SigninFinal from "./containers/SigninFinal/SigninFinal";
import AboutUs from "./containers/AboutUs/AboutUs";
import ContactUs from "./containers/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import PerfilUserTech from "./components/PerfilUserTech/PerfilUserTech";
import ProfileUserFinal from "./containers/FinalUserProfile/ProfileUserFinal";
import FormTechnicUserModifier from "./components/PerfilUserTech/UserTechModifier";
import WorkOrderDetails from "./containers/WorkOrderDetails/WorkOrderDetails";
// import Faq from "./components/faq/Faq";
import FaqPage from "./containers/faqPage/FaqPage";
import Error404 from "./containers/Error404/Error404";
import CreateWorkOrder from "./containers/CreateWorkOrder/CreateWorkOrder";
import SolicitedWork from "./containers/SolicitedWork/SolicitedWork";
import SolicitedWorkTech from "./containers/SolicitedWorkTech/SolicitedWorkTech";
import Dashboard from "./containers/UserAdmin/Dashboard";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import { getJobTypesAll } from "./redux/actions/jobTypes";
import { useDispatch, useSelector } from "react-redux";
import Reported from "./containers/Reported/Reported";
import ModifyUserFinal from "./containers/FinalUserProfile/ModifyUserFinal";
import BanJobRequest from "./components/Admin/BanJobRequest";

import Aos from "aos";
import "aos/dist/aos.css";
import Checkout from './components/MercadoPAgo/Checkout';
import PagoPromocion from './components/MercadoPAgo/PagoPromocion';
import ReportUser from './components/ReportUser/ReportUser';
// jose estuvo aquí

function App() {
  const dispatch = useDispatch();
  const jobTypes = useSelector((state) => state.jobTypes);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    if (!jobTypes.length) {
      dispatch(getJobTypesAll());
    }
  }, [jobTypes.length, dispatch]);

  return (
    <div className="appContainer">
      <Route path="/" component={NavBar} />

      <Switch>
        <PrivateRoute exact path="/login" component={Login} />

        <PrivateRoute exact path="/signinTech" component={SigninTech} />

        <PrivateRoute exact path="/signinfinal" component={SigninFinal} />

        <PrivateRoute
          exact
          path="/reportados"
          component={Reported}
          allow="admin"
        />

        <PrivateRoute
          exact
          path="/newWorkOrder"
          component={CreateWorkOrder}
          allow="userFinal"
        />

        <Route exact path="/workOrders/:id" component={BanJobRequest} />

        <Route exact path="/modificarPerfilC" component={ModifyUserFinal} />

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

        <PrivateRoute exact path="/admin" component={Dashboard} allow="admin" />

        <PrivateRoute
          exact
          path="/usuarioFinal"
          component={ProfileUserFinal}
          allow="userFinal"
        />

    <PrivateRoute exact path="/checkout" component={Checkout} allow="userTech" />
    <PrivateRoute exact path="/pago" component={PagoPromocion} allow="userTech" />

        <PrivateRoute
          exact
          path="/usuarioTech"
          component={PerfilUserTech}
          allow="userTech"
        />
        <Route
          exact
          path="/usuarioFinal/modifier"
          component={FormTechnicUserModifier}
        />
        <Route exact path="/workOrdersDetails" component={WorkOrderDetails} />

        <Route exact path="/solicitedWork/:idWork" component={SolicitedWork} />

        <Route
          exact
          path="/solicitedWorkTech/:idWork"
          component={SolicitedWorkTech}
        />

        <Route paht = '/report' component={ReportUser} />
        <Route path="*" component={Error404} />
      </Switch>
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
