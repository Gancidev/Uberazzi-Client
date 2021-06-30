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
import SelectVeicoli from "components/ModificaPrenotazione/SelectVeicolo.js";
import ConfermaAutista from "components/ModificaPrenotazione/ConfermaAutista.js";
import ManciaAutista from "components/ModificaPrenotazione/ManciaAutista.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

function prezzo_veicolo(id_veicolo, dataoraarrivo, dataorapartenza, valore){
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          let importo;
          let nuovo_importo = parseInt(JSON.parse(xmlHttp.responseText).Prezzo);
          let vecchio_importo = parseInt(document.getElementById("input_importo").value);
          if(nuovo_importo > vecchio_importo){
            importo=nuovo_importo;
          }
          else{
            importo=vecchio_importo;
          }
          var mancia = document.getElementById("valore_mancia").value;
          if(mancia !== "")
            importo = parseInt(importo) + parseInt(mancia);
          //ACCESSO AI DATI UTENTE POST LOGIN
          let utente = JSON.parse(window.localStorage.getItem("Utente"));
          utente = JSON.parse(utente);
          var queryString = window.location.search;
            var urlParams = new URLSearchParams(queryString);
            var id_prenotazione = urlParams.get('IDPrenotazione');
          var url = "http://91.199.223.61:3001/api/aggiorna_prenotazione?DataOra="+dataorapartenza+"&DataOraArrivo="+dataoraarrivo+"&Autista="+valore+"&IDPrenotazione="+id_prenotazione;
          fetch(url, {
              headers: {
                'idutente': utente.id,
                'x-access-token': utente.accessToken
              },
              method : "POST",
              body : new FormData(document.getElementById("form_modifica_prenotazione")),
          }).then(
              response => response.text()
          ).then(
            alert("Modifiche Confermate.")
          ).then(
            aggiorna_pagamento(id_prenotazione, importo, id_veicolo)
          );
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/prezzo_veicolo?IDVeicolo="+id_veicolo, true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
}

function stampa_veicoli(veicoli_occupati, veicoli){
  var bottone_disponibilita = document.getElementById("bottone_disponibilita");
  bottone_disponibilita.style.display="none";
  var select, option, sezione_select;
  select = document.getElementById("IDVeicolo");
  sezione_select = document.getElementById("selectVeicoli");
  var veicoli_o = [];
  for (var i = 0; i < veicoli_occupati.length; i++) {
    if (!veicoli_o.contains(veicoli_occupati[i].IDVeicolo)) {
      veicoli_o.push(veicoli_occupati[i].IDVeicolo);
    }
  }
  console.log(veicoli_o);
  var check=false;
  for(var j=1;j<veicoli.length+1;j++){
    for(var k=1;k<veicoli_o.length+1;k++){
      if(veicoli[j-1].IDVeicolo===veicoli_o[k-1]){
        check=true;
        break;
      }
    }
    if(check===true){
      check=false;
    }
    else{
      option = document.createElement("option");
      option.value=veicoli[j-1].IDVeicolo;
      option.innerHTML=veicoli[j-1].TipoVeicolo+":"+veicoli[j-1].Nome+"-"+veicoli[j-1].Targa+"  Prezzo:"+veicoli[j-1].Prezzo+"€";
      select.appendChild(option);
    }
  }
  sezione_select.style.display="block";
}

var flag5;
function richiedi_lista_veicoli(veicoli_occupati){
    if(flag5===true){
        return true;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() { 
        if (xmlHttp.status === 200){
          stampa_veicoli(veicoli_occupati, JSON.parse(xmlHttp.responseText));
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/lista_veicoli", true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag5=true;
}

var flag1;
function mostraDisponibilitaEPrezzo(controllo){
  if(flag1===true){
      return true;
  }
  if(controllo===true){
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
            richiedi_lista_veicoli(JSON.parse(xmlHttp.responseText));
        }
        else if(xmlHttp.status === 500){
            alert("ERRORE");
            window.location.replace("/prenotazioni");
        }
    }
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/veicoli_disponibili?Partenza="+dataorapartenza+"&Arrivo="+dataoraarrivo, true); // true for asynchronous 
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag1=true;
  }
}

function redirect_fattura(id_prenotazione, importo, veicolo){
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  window.location.replace("/Pagamento?numero="+id_prenotazione+"&nome="+utente.Nome+"%20"+utente.Cognome+"&email="+utente.email+"&prezzo="+importo+"&veicolo="+veicolo[0].Nome.replace(" ", "%20")+"-"+veicolo[0].TipoVeicolo);
}
function fattura(id_prenotazione, importo, veicolo){
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var url = "http://91.199.223.61:3001/api/info_veicolo?IDVeicolo="+veicolo;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "GET",
  }).then(
      response => response.text()
  ).then(
    html => redirect_fattura(id_prenotazione, importo, JSON.parse(html))
    );
}

function aggiorna_pagamento(id_prenotazione, importo, id_veicolo){
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var url = "http://91.199.223.61:3001/api/aggiorna_pagamento?IDPrenotazione="+id_prenotazione+"&Importo="+importo;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "GET",
  }).then(
      response => response.text()
  ).then(
    alert("Pagamento Aggiornato.")
  ).then(
    fattura(id_prenotazione, importo, id_veicolo)
  );
}

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
  if(document.getElementById("Autista").checked===true && document.getElementById("Autista_box").style.display==="block"){
    valore=1;
  }
  else{
    valore=0;
  }

  var id_veicolo = document.getElementById("IDVeicolo").value;
  prezzo_veicolo(id_veicolo,dataoraarrivo,dataorapartenza,valore);
}

function stampa_dettaglio(messaggio){
  messaggio = JSON.parse(messaggio);
  console.log(messaggio);
  var partenza = document.getElementById("Partenza");
  partenza.value=messaggio.Partenza;
  var arrivo = document.getElementById("Arrivo");
  arrivo.value=messaggio.Arrivo;
  var autista = document.getElementById("Autista");
  if(messaggio.Autista===true)
    autista.checked=true;
  else{
    var mancia = document.getElementById("Mancia");
    var box_autista = document.getElementById("Autista_box");
    autista.checked=false;
    box_autista.style.display="none";
    mancia.style.display="none";
  }
  var veicolo = document.getElementById("IDVeicolo");
  veicolo.value=messaggio.IDVeicolo;

  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          var input_importo = document.getElementById("input_importo");
          input_importo.value=parseInt(JSON.parse(xmlHttp.responseText).Importo)
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/dettagli_prenotazione_pagamento?IDPrenotazione="+messaggio.IDPrenotazione, true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);

}

var flag;
function richiedi_dettaglio_prenotazione(){
    if(flag===true){
        return true;
    }
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id_prenotazione = urlParams.get('IDPrenotazione');
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          stampa_dettaglio(xmlHttp.responseText);
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/dettagli_prenotazione?IDPrenotazione="+id_prenotazione, true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag=true;
}

function check_campi(){
  var dataorapartenza = document.getElementById("DataOra").value;
  var dataoraarrivo = document.getElementById("DataOraArrivo").value;
  if(dataorapartenza>dataoraarrivo){
    alert("Non puoi arrivare prima di partire.");
    return false;
  }
  if(dataorapartenza!=="" && dataoraarrivo!==""){return true;}
  else{alert("Compila tutti i campi prima di procedere.");return false};
}

export default function ModificaPrenotazione() {
  verifica_login();
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
  const followCursor = (event) => {};
  richiedi_dettaglio_prenotazione();
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
                  <Card className="card-register" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}} > Modifica Prenotazione</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_modifica_prenotazione" id="form_modifica_prenotazione">
                        <input type="hidden" id="input_importo" name="input_importo"/>
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
                        <br></br>
                        <SelectVeicoli/>
                        <ConfermaAutista/>
                        <ManciaAutista/>
                        <FormGroup check className="text-center">
                            <Button 
                                className="btn-round" 
                                color="primary" 
                                size="sm"
                                id="bottone_disponibilita"
                                onClick={() => mostraDisponibilitaEPrezzo(check_campi())}
                            >
                                Controlla Disponibilit&agrave; <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                        <FormGroup check id="paga" className="text-left" style={{display: "none"}}>
                            <Button
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => {setFormModal(true)}}
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
                                  <Button className="my-4" color="primary" type="button" onClick={aggiungi_prenotazione}>
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
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}