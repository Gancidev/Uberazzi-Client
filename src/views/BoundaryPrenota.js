/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import validator from 'validator';
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";
import SelectVeicoli from "components/NuovaPrenotazione/SelectVeicolo.js";
import ConfermaAutista from "components/NuovaPrenotazione/ConfermaAutista.js";
import ManciaAutista from "components/NuovaPrenotazione/ManciaAutista.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}


function check_disponibilita_old(){
    var partenza = document.getElementById("Partenza");
    var destinazione = document.getElementById("Arrivo");
    var dataorapartenza = document.getElementById("DataOra");
    var dataoraarrivo = document.getElementById("DataOraArrivo");
    if(partenza.value!=="" && destinazione.value!=="" && dataorapartenza.value!=="" && dataoraarrivo.value!==""){
        if(dataorapartenza.value>dataoraarrivo.value){
          alert("Non puoi arrivare prima di partire.");
          return false;
        }
        var selectVeicoli = document.getElementById("selectVeicoli");
        selectVeicoli.style.display="block";
    }
    else{
        alert("Seleziona prima Partenza, Destinazione, Data e Ora");
    }
}


/*
var flag1;
function check_disponibilita(){
  if(flag1===true){
      return true;
  }
  var ymd, hm, tipo;
  var dataorapartenza = document.getElementById("DataOra").value;
  var dataoraarrivo = document.getElementById("DataOraArrivo").value;
  dataorapartenza=dataorapartenza.split(" ");
  ymd = dataorapartenza[0].split("/");
  hm = dataorapartenza[1].split(":");
  tipo = dataorapartenza[2];
  dataorapartenza=ymd[2]+"-"+ymd[0]+"-"+ymd[1];
  if(tipo==="AM"){
    dataorapartenza=dataorapartenza+" "+(parseInt(hm[0])+2)+":"+hm[1];
  }
  else{
    dataorapartenza=dataorapartenza+" "+(parseInt(hm[0])+14)+":"+hm[1];
  }
  dataoraarrivo=dataoraarrivo.split(" ");
  ymd = dataoraarrivo[0].split("/");
  hm = dataoraarrivo[1].split(":");
  tipo = dataoraarrivo[2];
  dataoraarrivo=ymd[2]+"-"+ymd[0]+"-"+ymd[1];
  if(tipo==="AM"){
    dataoraarrivo=dataoraarrivo+" "+(parseInt(hm[0])+2)+":"+hm[1];
  }
  else{
    dataoraarrivo=dataoraarrivo+" "+(parseInt(hm[0])+14)+":"+hm[1];
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          console.log(xmlHttp.responseText);
      }
      else if(xmlHttp.status === 500){
          alert("ERRORE");
          window.location.replace("/prenotazioni");
      }
  }
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.open("GET", "http://localhost:3001/api/veicoli_disponibili?Partenza="+dataorapartenza+"&Arrivo="+dataoraarrivo, true); // true for asynchronous 
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}
*/

function aggiungi_prenotazione(){
  var ymd, hm, tipo, valore;
  var dataorapartenza = document.getElementById("DataOra").value;
  var dataoraarrivo = document.getElementById("DataOraArrivo").value;
  dataorapartenza=dataorapartenza.split(" ");
  ymd = dataorapartenza[0].split("/");
  hm = dataorapartenza[1].split(":");
  tipo = dataorapartenza[2];
  dataorapartenza=ymd[2]+"-"+ymd[0]+"-"+ymd[1];
  if(tipo==="AM"){
    dataorapartenza=dataorapartenza+"%20"+(parseInt(hm[0])+2)+":"+hm[1];
  }
  else{
    dataorapartenza=dataorapartenza+"%20"+(parseInt(hm[0])+14)+":"+hm[1];
  }
  dataoraarrivo=dataoraarrivo.split(" ");
  ymd = dataoraarrivo[0].split("/");
  hm = dataoraarrivo[1].split(":");
  tipo = dataoraarrivo[2];
  dataoraarrivo=ymd[2]+"-"+ymd[0]+"-"+ymd[1];
  if(tipo==="AM"){
    dataoraarrivo=dataoraarrivo+"%20"+(parseInt(hm[0])+2)+":"+hm[1];
  }
  else{
    dataoraarrivo=dataoraarrivo+"%20"+(parseInt(hm[0])+14)+":"+hm[1];
  }
  if(document.getElementById("Autista").checked===true){
    valore=1;
  }
  else{
    valore=0;
  }
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var url = "http://91.199.223.61:3001/api/nuova_prenotazione?DataOra="+dataorapartenza+"&DataOraArrivo="+dataoraarrivo+"&Autista="+valore;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "POST",
      body : new FormData(document.getElementById("form_prenotazione")),
  }).then(
      response => response.text()
  );
}


function aggiorna_prenotazione(id, importo, veicolo){
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        console.log(xmlHttp.responseText);
        alert("Prenotazione Completata");
        //ACCESSO AI DATI UTENTE POST LOGIN
        let utente = JSON.parse(window.localStorage.getItem("Utente"));
        utente = JSON.parse(utente);
        window.location.replace("/Pagamento?numero="+id+"&nome="+utente.Nome+"%20"+utente.Cognome+"&email="+utente.email+"&prezzo="+importo+"&veicolo="+veicolo.replace(" ", "%20"));
      }
      else if(xmlHttp.status === 403){
        alert("Non hai i permessi per accedere qui");
        window.location.replace("/home");
      }
  }
  xmlHttp.open("GET", "http://91.199.223.61:3001/api/aggiorna_stato_prenotazione_cliente?IDPrenotazione="+id+"&Stato=Attiva", true); // true for asynchronous
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
}

var flag;
function richiedi_ultime_prenotazioni(){
    if(flag===true){
        return true;
    }
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          salvaPagaPrenota(xmlHttp.responseText);
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/ultime_prenotazioni?IDUtente="+utente.id, true); // true for asynchronous 
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag=true;
}

function salvaPagaPrenota(prenotazioni){
  prenotazioni = JSON.parse(prenotazioni);
  //console.log(prenotazioni);
    var mancia = document.getElementById("valore_mancia").value;
    var importo;
    if(mancia === "")
      importo = parseInt(10);
    else
      importo = parseInt(10) + parseInt(mancia);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
            alert("Pagamento Confermato, Prenotazione Effettuata");
            aggiorna_prenotazione(prenotazioni[0].IDPrenotazione, importo, prenotazioni[0].Veicolo.Nome+"-"+prenotazioni[0].Veicolo.TipoVeicolo);
        }
        else if(xmlHttp.status === 500){
            alert("ERRORE");
            //window.location.replace("/home");
        }
    }
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/nuovo_pagamento?IDPrenotazione="+prenotazioni[0].IDPrenotazione+"&Importo="+importo, true); // true for asynchronous 
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
}

export default function NuovaPrenotazione() {
  verifica_login();
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [partenzaF, setPartenzaF] = React.useState(false);
  const [destinazioneF, setDestinazioneF] = React.useState(false);
  const [nome, setNome] = React.useState(false);
  const [scadenza, setScadenza] = React.useState(false);
  const [numero, setNumero] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState('')
    
  const validateCreditCard = (value) => {
    
    if (validator.isCreditCard(value)) {
      setErrorMessage('Numero Carta Valida.')
    } else {
      setErrorMessage('Numero carta non valido!')
    }
  }
  
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);
  const followCursor = (event) => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerWidth / 6;
    setSquares1to6(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.02 +
        "deg) rotateX(" +
        posY * -0.02 +
        "deg)"
    );
  };
  return (
    <>
      <PersonalNavBar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
              <Row>
                <Col className="offset-md-3" lg="5" md="6">
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-register" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}} > Nuova Prenotazione</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_prenotazione" id="form_prenotazione">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": partenzaF,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="Partenza"
                          name="Partenza"
                          placeholder="Partenza*"
                          type="text"
                          onFocus={(e) => setPartenzaF(true)}
                          onBlur={(e) => setPartenzaF(false)}
                          required
                        />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": destinazioneF,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="Arrivo"
                          name="Arrivo"
                          placeholder="Arrivo*"
                          type="text"
                          onFocus={(e) => setDestinazioneF(true)}
                          onBlur={(e) => setDestinazioneF(false)}
                          required
                        />
                        </InputGroup>
                        <div className="datepicker-container" style={{color: "#171941"}}>
                            <FormGroup>
                                <ReactDatetime
                                inputProps={{
                                    id:"DataOra",
                                    name:"DataOra",
                                    className: "form-control",
                                    placeholder: "Data e Ora Inizio Noleggio",
                                }}
                                />
                            </FormGroup>
                            </div>
                            <div className="datepicker-container" style={{color: "#171941"}}>
                            <FormGroup>
                                <ReactDatetime
                                inputProps={{
                                    id:"DataOraArrivo",
                                    name:"DataOraArrivo",
                                    className: "form-control",
                                    placeholder: "Data e Ora Fine Noleggio",
                                }}
                                />
                            </FormGroup>
                            </div>
                        <FormGroup check className="text-left">
                            <Button 
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => check_disponibilita_old()}
                            >
                                Procedi <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                        <SelectVeicoli/>
                        <ConfermaAutista/>
                        <ManciaAutista/>
                        <FormGroup check id="paga" className="text-left" style={{display: "none"}}>
                            <Button
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => {aggiungi_prenotazione();setFormModal(true)}}
                            >
                                Concludi e Paga <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                      </Form>
                          {/* Start Form Modal */}
                          <Modal
                            modalClassName="modal-black"
                            isOpen={formModal}
                            toggle={() => setFormModal(false)}
                          >
                            <div className="modal-header justify-content-center">
                              <button className="close" onClick={() => setFormModal(false)}>
                                <i className="tim-icons icon-simple-remove text-white" />
                              </button>
                              <div className="text-muted text-center ml-auto mr-auto">
                                <h3 className="mb-0">Inserisci i dati della tua carta</h3>
                              </div>
                            </div>
                            <div className="modal-body">
                              <Form role="form">
                                <FormGroup className="mb-3">
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": numero,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-credit-card" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Numero Carta (tutto attaccato)"
                                      type="text"
                                      onFocus={(e) => setNumero(true)}
                                      onBlur={(e) => setNumero(false)}
                                      onChange={(e) => validateCreditCard(e.target.value)}
                                    />
                                    <span style={{
                                        fontWeight: 'bold',
                                      }}>{errorMessage}
                                    </span>
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": nome,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Nome"
                                      type="text"
                                      onFocus={(e) => setNome(true)}
                                      onBlur={(e) => setNome(false)}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": scadenza,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-calendar-60" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Scadenza"
                                      type="text"
                                      onFocus={(e) => setScadenza(true)}
                                      onBlur={(e) => setScadenza(false)}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                  <Button className="my-4" color="primary" type="button" onClick={richiedi_ultime_prenotazioni}>
                                    Paga
                                  </Button>
                                </div>
                              </Form>
                            </div>
                          </Modal>
                          {/* End Form Modal */}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}