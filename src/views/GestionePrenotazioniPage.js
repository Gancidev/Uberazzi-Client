/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import {
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

  function verifica_login(){
    if(!window.localStorage.getItem("Utente")){
      window.location.replace("/home");
    }
  }
  
  function modifica_prenotazione(redirect){
    var ids = redirect.id.split("-");
    window.location.replace("/modifica_prenotazione?IDPrenotazione="+ids[1]);

  }

  var flag;
  function stampa_prenotazioni_attive(messaggio){
    if(flag===true){
      return true;
  }
    messaggio = JSON.parse(messaggio);
    //console.log(messaggio);
    var tbody = document.getElementById("lista_prenotazioni_attive");
    var tr, th, td1, td2, td3, button, conferma, date, ye, mo, da, h, m;
    if(messaggio.length===0){
        tr = document.createElement("tr");
        tr.scope="row";
            th = document.createElement("th");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td3.innerHTML="Nessuna Prenotazione Attiva";
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);
        return false;
    }
    for(var i=1;i<messaggio.length+1;i++){
      tr = document.createElement("tr");
      tr.scope="row";
          th = document.createElement("th");
          th.innerHTML=messaggio[i-1].IDPrenotazione;

          td1 = document.createElement("td");
          date = new Date(messaggio[i-1].DataOra);
          ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
          mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(date);
          da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(date);
          h = new Intl.DateTimeFormat('it', { hour: '2-digit' }).format(date);
          m = new Intl.DateTimeFormat('it', { minute: '2-digit' }).format(date);
          td1.innerHTML=da+" "+mo[0].toUpperCase()+mo.slice(1)+" "+ye+" "+(h-2)+":"+m;

          td2 = document.createElement("td");
          td2.innerHTML=messaggio[i-1].Stato;
          td3 = document.createElement("td");
          button = document.createElement("button");
          button.type="button";
          button.className="btn-simple btn btn-warning";
          button.innerHTML='<i class="tim-icons icon-settings"/>';
          button.id ="consegna-"+messaggio[i-1].IDPrenotazione;
          conferma = function(){ modifica_prenotazione(this); }
          button.addEventListener('click', conferma, false);
          td3.appendChild(button);
      tr.appendChild(th);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
  tbody.appendChild(tr);
}
    flag=true;
}

var flag1;
function richiedi_prenotazioni_attive(){
  if(flag1===true){
      return true;
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        stampa_prenotazioni_attive(xmlHttp.responseText);
      else if(xmlHttp.status === 403){
        alert("Non hai i permessi per accedere qui");
        window.location.replace("/home");
      }
  }
  xmlHttp.open("GET", "http://localhost:3001/api/prenotazioni_attive", true); // true for asynchronous
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}

export default function GestionePrenotazioniPage() {
  verifica_login();
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
  
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
        posX * 0.04 +
        "deg) rotateX(" +
        posY * -0.04 +
        "deg)"
    );
    setSquares7and8(
      "perspective(500px) rotateY(" +
        posX * 0.05 +
        "deg) rotateX(" +
        posY * -0.05 +
        "deg)"
    );
  };
  richiedi_prenotazioni_attive();
    return(
      <>
        <PersonalNavBar />
        <div className="wrapper">
            <div className="page-header">
                <div className="content">
                    <Container className="align-items-center">
                        <Row>
                            <Col className="offset-md-3" lg="5" md="6">
                            <img
                                alt="..."
                                className="square square-7_personale"
                                id="square7"
                                src={require("assets/veicoli/auto1.png").default}
                                style={{ transform: squares7and8 }}
                            />
                            <img
                                alt="..."
                                className="square square-8_personale"
                                id="square8"
                                src={require("assets/veicoli/auto2.png").default}
                                style={{ transform: squares7and8 }}
                            />
                            <img
                                alt="..."
                                className="square square-4_personale"
                                id="square4"
                                src={require("assets/veicoli/moto1.png").default}
                                style={{ transform: squares1to6 }}
                            />
                             <img
                                alt="..."
                                className="square square-5_personale"
                                id="square5"
                                src={require("assets/veicoli/moto3.png").default}
                                style={{ transform: squares1to6 }}
                            />
                            <img
                                alt="..."
                                className="square square-6_personale"
                                id="square6"
                                src={require("assets/veicoli/monopattino1.png").default}
                                style={{ transform: squares1to6 }}
                            />
                            </Col>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Data e Ora</th>
                                    <th>Stato</th>
                                    <th>Modifica</th>
                                    </tr>
                                </thead>
                                <tbody id="lista_prenotazioni_attive">
                                </tbody>
                            </Table>
                        </Row>                             
                        <img
                            alt="..."
                            className="square square-3_personale"
                            id="square3"
                            src={require("assets/veicoli/bici1.png").default}
                            style={{ transform: squares1to6 }}
                        />                            
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
      </>);
}