/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from "./views/LoginAdmin/Login";

import "assets/css/material-dashboard-react.css?v=1.9.0";
import HomeBefore from "./viewHome/HomeBefore/HomeBefore";
import HomeAfter from "./viewHome/HomeAfter/HomeAfter";
import LoginHome from "./viewHome/LoginHome/LoginHome";
import SignUp from "./viewHome/signUp/SignUp";
const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
        <Route path="/home" component={HomeBefore} />
        <Route path="/HaLong" component={HomeAfter} />
        <Route path="/loginHome" component={LoginHome} />
        <Route path="/signUpHome" component={SignUp} />
        <Route path="/admin" render={()=>{
            return localStorage.getItem("accessToken") ? <Admin/> : <Login/>
        }}>

        </Route>
        <Redirect to = "/home" component={HomeBefore}/>

    </Switch>
  </Router>,
  document.getElementById("root")
);
