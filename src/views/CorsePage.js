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

function conferma_corsa(id){
    alert("La Corsa: "+ id.id[id.id.length-1] +" e' stata accettata.");
}
function stampa(messaggio){
    messaggio = JSON.parse(messaggio);
    var table = document.getElementById("corse");
    var tr;
    var th;
    var td1;
    var td2;
    var td3;
    var td4;
    var button;
    var conferma;
    var date;
    var ye;
    var mo;
    var da;
    var h;
    var m;
    for(var i=1;i<messaggio["corse"].length+1;i++){
        tr = document.createElement("tr");
        th = document.createElement("th");
        td1 = document.createElement("td");
        td2 = document.createElement("td");
        td3 = document.createElement("td");
        td4 = document.createElement("td");
        button = document.createElement("button");
        th.id ="id"+messaggio["corse"][i-1].IDPrenotazione;
        th.innerHTML = messaggio["corse"][i-1].IDPrenotazione;
        td1.id ="partenza"+messaggio["corse"][i-1].IDPrenotazione;
        td1.innerHTML = messaggio["corse"][i-1].Partenza;
        td2.id ="arrivo"+messaggio["corse"][i-1].IDPrenotazione;
        td2.innerHTML = messaggio["corse"][i-1].Arrivo;
        td3.id ="dataeora"+messaggio["corse"][i-1].IDPrenotazione;
        date = new Date(messaggio["corse"][i-1].DataOra);
        ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
        mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(date);
        da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(date);
        h = new Intl.DateTimeFormat('it', { hour: '2-digit' }).format(date);
        m = new Intl.DateTimeFormat('it', { minute: '2-digit' }).format(date);
        td3.innerHTML = da+" "+mo[0].toUpperCase()+mo.slice(1)+" "+ye+" "+(h-2)+":"+m;
        tr.appendChild(th);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        button.id ="accetta"+messaggio["corse"][i-1].IDPrenotazione;
        button.innerHTML = '<i class="tim-icons icon-check-2"/>';
        button.className="btn-simple btn btn-success";
        conferma = function(){ conferma_corsa(this); }
        button.addEventListener('click', conferma, false);
        td4.appendChild(button);
        tr.appendChild(td4);
        table.appendChild(tr);
    }
}
var flag;
function richiedi_corse(){
    if(flag===true){
        return true;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
            stampa(xmlHttp.responseText);
    }
    xmlHttp.open("GET", "http://localhost:3001/api/corse", true); // true for asynchronous 
    xmlHttp.send(null);
    flag=true;
}
export default function CorsePage() {
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
  richiedi_corse();
  return(
    <>
    <PersonalNavBar />
        <div className="wrapper" onload="richiedi_corse()">
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
                                    <th>Partenza</th>
                                    <th>Arrivo</th>
                                    <th>Data e Ora</th>
                                    <th>Accetta</th>
                                    </tr>
                                </thead>
                                <tbody id="corse">
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