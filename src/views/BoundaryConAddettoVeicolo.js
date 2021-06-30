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

  function confermaConsegna(id){
    var ids = id.id.split("-");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
          alert("Veicolo Consegnato Correttamente");
          window.location.reload();
        }
        else if(xmlHttp.status === 403){
          alert("Non hai i permessi per accedere qui");
          window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/consegna_veicolo_AddettoParcheggio?IDPrenotazione="+ids[1], true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
}

  var flag;
  function listaVeicoli(messaggio){
    if(flag===true){
      return true;
  }
    messaggio = JSON.parse(messaggio);
    //console.log(messaggio);
    var tbody = document.getElementById("lista_veicoli");
    var tr, th, td1, td2, button, conferma;
    if(!messaggio.length){
        tr = document.createElement("tr");
        tr.scope="row";
            th = document.createElement("th");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td2.innerHTML="Nessun Veicolo Da Consegnare";
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tbody.appendChild(tr);
        return false;
    }
    for(var i=1;i<messaggio.length+1;i++){
            tr = document.createElement("tr");
            tr.scope="row";
                th = document.createElement("th");
                th.innerHTML=messaggio[i-1].Veicolo.Targa;
                td1 = document.createElement("td");
                td1.innerHTML=messaggio[i-1].Veicolo.IDVeicolo;
                td2 = document.createElement("td");
                button = document.createElement("button");
                button.type="button";
                button.className="btn-simple btn btn-success";
                button.innerHTML='<i class="tim-icons icon-check-2"/>';
                button.id ="consegna-"+messaggio[i-1].IDPrenotazione;
                conferma = function(){ confermaConsegna(this); }
                button.addEventListener('click', conferma, false);
                td2.appendChild(button);
            tr.appendChild(th);
            tr.appendChild(td1);
            tr.appendChild(td2);
        tbody.appendChild(tr);
    }

    flag=true;
}

var flag1;
function richiedi_veicoli(){
  if(flag1===true){
      return true;
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        listaVeicoli(xmlHttp.responseText);
      else if(xmlHttp.status === 403){
          alert("Non hai i permessi per accedere qui");
          window.location.replace("/home");
      }
  }
  xmlHttp.open("GET", "http://91.199.223.61:3001/api/consegne_veicoli", true); // true for asynchronous 
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}


export default function ConsegnaVeicoliPage() {
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
  richiedi_veicoli();
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
                                    <th>Targa o Identificativo</th>
                                    <th>Tipologia Veicolo</th>
                                    <th>Consegna</th>
                                    </tr>
                                </thead>
                                <tbody id="lista_veicoli">
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