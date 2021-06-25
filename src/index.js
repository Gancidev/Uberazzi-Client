/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import LandingPage from "views/LandingPage.js";
import RegisterPage from "views/RegisterPage.js";
import LoginPage from "views/LoginPage.js";
import ProfilePage from "views/ProfilePage.js";
import PrenotazioniPage from "views/PrenotazioniPage.js";
import NuovaPrenotazionePage from "views/NuovaPrenotazionePage.js";
import ModificaPrenotazionePage from "views/ModificaPrenotazionePage.js";
import VeicoliPage from "views/VeicoliPage.js";
import PermessiUtentiPage from "views/PermessiUtentiPage.js";
import CorsePage from "views/CorsePage.js";
import RecuperoPassword from "views/RecuperoPasswordPage.js";
import NotificaRitardo from "views/NotificaRitardoPage.js";
import ContattaciPage from "views/ContattaciPage.js";
import ConsegnaVeicoliPage from "views/ConsegnaVeicoliPage.js";
import RitiroVeicoloPage from "views/RitiroVeicoloPage.js";
import GestionePrenotazioniPage from "views/GestionePrenotazioniPage.js";
import NuovoVeicolo from "views/NuovoVeicoloPage.js";
import Test from "views/TestPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
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
        path="/permessi_utenti"
        render={(props) => <PermessiUtentiPage {...props} />}
      />
      <Route
        path="/corse"
        render={(props) => <CorsePage {...props} />}
      />
      <Route
        path="/recupero_password"
        render={(props) => <RecuperoPassword {...props} />}
      />
      <Route
        path="/notifica_ritardo"
        render={(props) => <NotificaRitardo {...props} />}
      />
      <Route
        path="/contattaci"
        render={(props) => <ContattaciPage {...props} />}
      />
      <Route
        path="/consegna_veicoli"
        render={(props) => <ConsegnaVeicoliPage {...props} />}
      />
      <Route
        path="/ritiro_veicolo"
        render={(props) => <RitiroVeicoloPage {...props} />}
      />
      <Route
        path="/gestione_prenotazioni"
        render={(props) => <GestionePrenotazioniPage {...props} />}
      />
      <Route
        path="/nuovo_veicolo"
        render={(props) => <NuovoVeicolo {...props} />}
      />
      <Route
        path="/test"
        render={(props) => <Test {...props} />}
      />
      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
