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

import Home from "views/Home.js";
import BoundaryRegistrazione from "views/BoundaryRegistrazione.js";
import BoundaryLogin from "views/BoundaryLogin.js";
import BoundaryProfilo from "views/BoundaryProfilo.js";
import BoundaryPrenotazioni from "views/BoundaryPrenotazioni.js";
import BoundaryPrenota from "views/BoundaryPrenota.js";
import BoundaryModificaPrenota from "views/BoundaryModificaPrenota.js";
import BoundaryListaVeicoli from "views/BoundaryListaVeicoli.js";
import BoundaryAdmin from "views/BoundaryAdmin.js";
import BoundaryAccettaCorsa from "views/BoundaryAccettaCorsa.js";
import BoundaryRecPassword from "views/BoundaryRecPassword.js";
import BoundaryNotRitardo from "views/BoundaryNotRitardo.js";
import ContattaciPage from "views/ContattaciPage.js";
import BoundaryConAddettoVeicolo from "views/BoundaryConAddettoVeicolo.js";
import BoundaryRitAddettoVeicolo from "views/BoundaryRitAddettoVeicolo.js";
import BoundaryConVeicolo from "views/BoundaryConVeicolo.js";
import BoundaryRitVeicolo from "views/BoundaryRitVeicolo.js";
import GestionePrenotazioniPage from "views/GestionePrenotazioniPage.js";
import NuovoVeicolo from "views/NuovoVeicoloPage.js";
import BoundaryTicket from "views/BoundaryTicket.js";
import AggiungiFoto from "views/AggiungiFotoPage.js";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/home"
        render={(props) => <Home {...props} />}
      />
      <Route
        path="/registrazione"
        render={(props) => <BoundaryRegistrazione {...props} />}
      />
      <Route
        path="/login"
        render={(props) => <BoundaryLogin {...props} />}
      />
      <Route
        path="/profilo"
        render={(props) => <BoundaryProfilo {...props} />}
      />
      <Route
        path="/prenotazioni"
        render={(props) => <BoundaryPrenotazioni {...props} />}
      />
      <Route
        path="/nuova_prenotazione"
        render={(props) => <BoundaryPrenota {...props} />}
      />
      <Route
        path="/modifica_prenotazione"
        render={(props) => <BoundaryModificaPrenota {...props} />}
      />
      <Route
        path="/gestione_veicoli"
        render={(props) => <BoundaryListaVeicoli {...props} />}
      />
      <Route
        path="/permessi_utenti"
        render={(props) => <BoundaryAdmin {...props} />}
      />
      <Route
        path="/corse"
        render={(props) => <BoundaryAccettaCorsa {...props} />}
      />
      <Route
        path="/recupero_password"
        render={(props) => <BoundaryRecPassword {...props} />}
      />
      <Route
        path="/notifica_ritardo"
        render={(props) => <BoundaryNotRitardo {...props} />}
      />
      <Route
        path="/contattaci"
        render={(props) => <ContattaciPage {...props} />}
      />
      <Route
        path="/consegna_veicoli"
        render={(props) => <BoundaryConAddettoVeicolo {...props} />}
      />
      <Route
        path="/ritiro_veicolo"
        render={(props) => <BoundaryRitAddettoVeicolo {...props} />}
      />
      <Route
        path="/consegna_veicoli_cliente"
        render={(props) => <BoundaryConVeicolo {...props} />}
      />
      <Route
        path="/ritiro_veicolo_cliente"
        render={(props) => <BoundaryRitVeicolo {...props} />}
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
        path="/modifica_condizioni_veicolo"
        render={(props) => <BoundaryTicket {...props} />}
      />
      <Route
        path="/aggiungi_foto"
        render={(props) => <AggiungiFoto {...props} />}
      />

      <Redirect from="/" to="/home" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
