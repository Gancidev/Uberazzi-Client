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

  function assegna_permessi(selezione){
      //console.log(selezione);
      if(selezione.value==="NONE"){
          alert("Non puoi cancellare i permessi ad un utente, ma solo assegnarne di altri, anche se la select cambia valore i permessi non verranno modificati.");
          return false;
      }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
            alert("Permessi Aggiornati Correttamente.");
            //console.log(xmlHttp.responseText);
            //window.location.reload();
        }
        else if(xmlHttp.status === 500){
            alert("Permessi Non Aggiornati Correttamente.");
            //window.location.replace("/permessi_utenti");
        }
    }
    xmlHttp.open("GET", "http://localhost:3001/api/aggiorna_permesso?Permesso="+selezione.value+"&IDUtente="+selezione.id[selezione.id.length-1], true); // true for asynchronous 
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
}

  var flag;
  function stampa_utenti(messaggio){
    if(flag===true){
      return true;
    }
    messaggio = JSON.parse(messaggio);
    //console.log(messaggio);
    var tbody = document.getElementById("lista_utenti");
    var tr, th, td1, td2, td3, td4, div, select, option1, option2, option3, option4, option5, conferma;
    if(messaggio["utenti"].length===0){
        tr = document.createElement("tr");
        th = document.createElement("th");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        td4.innerHTML="Nessun Utente Registrato";
        tr.appendChild(td4);
        tbody.appendChild(tr);
        return false;
    }
    for(var i=1;i<messaggio["utenti"].length+1;i++){
        tr = document.createElement("tr");
        th = document.createElement("th");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        div = document.createElement("div");
        select = document.createElement("select");
        option1 = document.createElement("option");
        option2 = document.createElement("option");
        option3 = document.createElement("option");
        option4 = document.createElement("option");
        option5 = document.createElement("option");
            th.innerHTML=messaggio["utenti"][i-1].IDUtente;
            tr.appendChild(th);
            td1.innerHTML=messaggio["utenti"][i-1].Nome;
            tr.appendChild(td1);
            td2.innerHTML=messaggio["utenti"][i-1].Cognome;
            tr.appendChild(td2);
            td3.innerHTML=messaggio["utenti"][i-1].Email;
            tr.appendChild(td3);
                div.className="form-group"+messaggio["utenti"][i-1].IDUtente;
                    select.name="selezione_permessi"+messaggio["utenti"][i-1].IDUtente;
                    select.id="selezione_permessi"+messaggio["utenti"][i-1].IDUtente;
                    select.className="form-control";
                    select.style="color: rgb(186, 84, 245);";
                    conferma = function(){ assegna_permessi(this); }
                    select.addEventListener('change', conferma, false);
                        option1.value="NONE";
                        option1.innerHTML="----";
                        option2.value="1";
                        option2.innerHTML="Cliente";
                        option3.value="2";
                        option3.innerHTML="Addetto Al Parcheggio";
                        option4.value="3";
                        option4.innerHTML="Autista";
                        option5.value="4";
                        option5.innerHTML="Amministratore";
                    select.appendChild(option1);
                    select.appendChild(option2);
                    select.appendChild(option3);
                    select.appendChild(option4);
                    select.appendChild(option5);
                div.appendChild(select);
            td4.appendChild(div);
            tr.appendChild(td4);
        tbody.appendChild(tr);
    }

    flag=true;
}

var flag1;
function richiedi_utenti(){
  if(flag1===true){
      return true;
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        stampa_utenti(xmlHttp.responseText);
    else if(xmlHttp.status === 403){
        alert("Non hai i permessi per accedere qui");
        window.location.replace("/home");
    }
  }
  xmlHttp.open("GET", "http://localhost:3001/api/utenti", true); // true for asynchronous 
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}

export default function PermessiUtenti() {
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
  richiedi_utenti();
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
                        <Table striped variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Cognome</th>
                                    <th>Email</th>
                                    <th>Modifica Ruolo</th>
                                </tr>
                            </thead>
                            <tbody id="lista_utenti">
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