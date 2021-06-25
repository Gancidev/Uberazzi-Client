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
    Button,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

  function conferma_condizioni(id){
      alert("Il veicolo: "+ id.id[id.id.length-1] +" e' in condizioni tali da poter tornare prenotabile.")
  }
  
  var flag;
  function stampa_condizioni_veicoli(messaggio){
    if(flag===true){
      return true;
  }
    messaggio = JSON.parse(messaggio);
    console.log(messaggio);
    var tbody = document.getElementById("lista_condizioni_veicoli");
    var tr, th, td1, td2, td3, button, conferma;
    if(messaggio.length===0){
        tr = document.createElement("tr");
        tr.scope="row";
            th = document.createElement("th");
            td1 = document.createElement("td");
            td2 = document.createElement("td");
            td3 = document.createElement("td");
            td3.innerHTML="Nessun Veicolo Da Consegnare";
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
                th.innerHTML=messaggio[i-1].Targa;
                td1 = document.createElement("td");
                td1.innerHTML=messaggio[i-1].IDVeicolo;
                td2 = document.createElement("td");
                td2.innerHTML=messaggio[i-1].Condizioni;
                td3 = document.createElement("td");
                button = document.createElement("button");
                button.type="button";
                button.className="btn-simple btn btn-success";
                button.innerHTML='<i class="tim-icons icon-check-2"/>';
                button.id ="consegna"+messaggio[i-1].IDVeicolo;
                conferma = function(){ conferma_condizioni(this); }
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
function richiedi_condizioni_veicoli(){
  if(flag1===true){
      return true;
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200);
      stampa_condizioni_veicoli(xmlHttp.responseText);
  }
  xmlHttp.open("GET", "http://localhost:3001/api/condizioni_veicoli", true); // true for asynchronous 
  xmlHttp.send(null);
  flag1=true;
}






export default function VeicoliPage() {
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
  richiedi_condizioni_veicoli();
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
                                    <th>Veicolo</th>
                                    <th>Condizioni</th>
                                    <th>Conferma</th>
                                    </tr>
                                </thead>
                                <tbody id="lista_condizioni_veicoli">
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