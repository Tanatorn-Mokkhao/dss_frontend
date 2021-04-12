import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./container/home/home";
import Signin from "./container/signin/signin";
import { useDispatch, useSelector } from "react-redux";
import { isLogged } from "./action/authAction";
import { getAllTable, getAllChart } from "./action/initialData";
import Importexcel from "./container/importexcel/importexcel";
import Destinationlist from "./container/chart/destinationlist";
import PrivateRoute from "../src/privateRoute/privateRoute";
import HomeDash from "./container/dashboard/homeDash/homeDashBoard";
import DashBoard from "./container/dashboard/dashboard";
function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(isLogged());

    if (auth.authenticate) {
      dispatch(getAllTable());
      dispatch(getAllChart());
    }
    // ping heroku
    (function wakeup() {
      setTimeout(wakeup, 1500000); //29m
    })();
    //
  }, [auth.authenticate]);

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/home/dashboard" component={HomeDash} />
        <PrivateRoute path="/importfile" component={Importexcel} />
        <PrivateRoute path="/dashboard/:slug" component={DashBoard} />
        <PrivateRoute path="/:slug" component={Destinationlist} />
      </Switch>
    </div>
  );
}

export default App;
