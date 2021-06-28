/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  FormGroup,
  Input,
  Form,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

var flag1;
function verifica_dati_form(){
  if(flag1===true){
    flag1=false;
    return true;
  }
  var email = document.form_modifica_dati_utente.Email.value;
  var cartaidentita = document.form_modifica_dati_utente.CartaIdentita.value;
  var indirizzo = document.form_modifica_dati_utente.Indirizzo.value;
  var cap = document.form_modifica_dati_utente.CAP.value;
  
  if(cartaidentita==="" || indirizzo==="" || cap==="" || email===""){
    alert("Inserisci tutti i dati obbligatori per continuare");
    return false;
  }
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var url = "http://localhost:3001/api/aggiorna_utente?IDUtente="+utente.id;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "POST",
      body : new FormData(document.getElementById("form_modifica_dati_utente")),
  }).then(
      response => response.text()
  ).then(
      html => console.log(html)
  );
  flag1=true;
}

function stampa_ultime_prenotazioni(messaggio){
  messaggio = JSON.parse(messaggio);
  //console.log(messaggio);
  var tbody = document.getElementById("lista_ultime_prenotazioni");
  var tr, td1, td2, td3;
  var date;
  var ye;
  var mo;
  var da;
  var h;
  var m;
  if(messaggio.length===0){
      return false;
  }
  for(var i=1;i<messaggio.length+1;i++){
      tr = document.createElement("tr");
        td1 = document.createElement("td");
        td1.innerHTML = messaggio[i-1].IDPrenotazione;
        td2 = document.createElement("td");
        date = new Date(messaggio[i-1].DataOra);
        ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
        mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(date);
        da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(date);
        h = new Intl.DateTimeFormat('it', { hour: '2-digit' }).format(date);
        m = new Intl.DateTimeFormat('it', { minute: '2-digit' }).format(date);
        td2.innerHTML = da+" "+mo[0].toUpperCase()+mo.slice(1)+" "+ye+" "+(h-2)+":"+m;
        td3 = document.createElement("td");
        td3.innerHTML=messaggio[i-1].Stato;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
    tbody.appendChild(tr);
  }
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
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            stampa_ultime_prenotazioni(xmlHttp.responseText);
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://localhost:3001/api/ultime_prenotazioni?IDUtente="+utente.id, true); // true for asynchronous 
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag=true;
}

export default function ProfilePage() {
  richiedi_ultime_prenotazioni();
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var date = new Date(utente.DataDiNascita);
  var ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
  var mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(date);
  var da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(date);
  verifica_login();
  const [tabs, setTabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <PersonalNavBar />
      <div className="wrapper">
        <div className="page-header" style={{maxHeight: "inherit"}}>
        <img
            alt="..."
            className="path"
            src={require("assets/path_rosa/path4.png").default}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">{utente.Nome} {utente.Cognome}</h1>
                <h5 className="text-on-back">Info</h5>
                <p className="profile-description" style={{marginBottom: "20%"}}>
                  Nome: {utente.Nome}<br></br>
                  Cognome: {utente.Cognome}<br></br>
                  Data di Nascita: {da+" "+mo[0].toUpperCase()+mo.slice(1)+" "+ye}<br></br>
                  Carta D&#39;Identit&agrave;: {utente.CartaIdentita}<br></br>
                  Indirizzo: {utente.Indirizzo}, {utente.CAP}<br></br>
                  Email: {utente.email} <br></br>
                  Numero e Tipo Patente: {utente.NumeroPatente}, {utente.TipoPatente}<br></br>
                </p>
              </Col>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/mike.jpg").default}
                    />
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#pablo"
                        >
                          Prenotazioni
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#pablo"
                        >
                          Mod. Info
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">ID</th>
                              <th className="header">Data</th>
                              <th className="header">Stato</th>
                            </tr>
                          </thead>
                          <tbody id="lista_ultime_prenotazioni">
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Form className="form" name="form_modifica_dati_utente" id="form_modifica_dati_utente">
                            <Row>
                            <Label sm="4">Carta D&#39;Identit&agrave;</Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input
                                    placeholder="Carta D&#39;Identit&agrave;"
                                    value={utente.CartaIdentita}
                                    name="CartaIdentita"
                                    id="CartaIdentita"
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="4">Indirizzo</Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input
                                    placeholder="Indirizzo"
                                    name="Indirizzo"
                                    id="Indirizzo"
                                    value={utente.Indirizzo}
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="4">CAP</Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input
                                    placeholder="CAP"
                                    name="CAP"
                                    id="CAP"
                                    value={utente.CAP}
                                    type="text"
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="4">Email</Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input
                                    placeholder="Email"
                                    name="Email"
                                    id="Email"
                                    value={utente.email}
                                    type="email"
                                />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="4">Numero Patente
                            </Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input placeholder="Numero Patente" name="NumeroPatente" id="NumeroPatente" value={utente.NumeroPatente} type="text" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label sm="4">Tipo Patente
                            </Label>
                            <Col sm="8">
                                <FormGroup>
                                <Input placeholder="Tipo Patente" name="TipoPatente" id="TipoPatente" value={utente.TipoPatente} type="text" />
                                </FormGroup>
                            </Col>
                            </Row>
                        <Button
                          className="btn-simple btn-icon btn-round float-right"
                          color="primary"
                          type="button"
                          onClick={verifica_dati_form}
                        >
                          <i className="tim-icons icon-send" />
                        </Button>
                        </Form>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}
