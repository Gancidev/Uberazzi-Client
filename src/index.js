/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Index from "views/component.js";
import LandingPage from "views/LandingPage.js";
import RegisterPage from "views/RegisterPage.js";
import LoginPage from "views/LoginPage.js";
import ProfilePage from "views/ProfilePage.js";
import PrenotazioniPage from "views/PrenotazioniPage.js";
import NuovaPrenotazionePage from "views/NuovaPrenotazionePage.js";
import ModificaPrenotazionePage from "views/ModificaPrenotazionePage.js";
import VeicoliPage from "views/VeicoliPage.js";
import CorsePage from "views/CorsePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/components" render={(props) => <Index {...props} />} />
      <Route
        path="/home"
        render={(props) => <LandingPage {...props} />}
      />
      <Route
        path="/registrazione"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <LoginPage {...props} />}
      />
      <Route
        path="/profilo"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/prenotazioni"
        render={(props) => <PrenotazioniPage {...props} />}
      />
      <Route
        path="/nuova_prenotazione"
        render={(props) => <NuovaPrenotazionePage {...props} />}
      />
      <Route
        path="/modifica_prenotazione"
        render={(props) => <ModificaPrenotazionePage {...props} />}
      />
      <Route
        path="/veicoli"
        render={(props) => <VeicoliPage {...props} />}
      />
      <Route
        path="/corse"
        render={(props) => <CorsePage {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
