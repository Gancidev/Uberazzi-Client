/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

var flag;
function stampa_prenotazioni(messaggio){
  if(flag===true){
    return true;
}
  messaggio = JSON.parse(messaggio);
  //console.log(messaggio);
  var container = document.getElementById("lista_prenotazioni");
  var row,div1,div2,div3,img,h4,div4,div5,div6,div7,table,thead,tr,th1,th2,th3,tbody,tr2,td1,td2,td3,button;
  var lunghezza = messaggio.length;
  if(lunghezza===0){
    console.log("ciao");
    row = document.createElement("div");
    row.className="row";
    row.innerHTML="<h4>Nessuna Prenotazione Effettuata.</h4>";
    container.appendChild(row);
    return false;
  }
  var righe = Math.ceil(lunghezza / 3);
  var i, j, date, ye, mo, da, h, m, datum, date_now, a;
  for(i=0;i<righe;i++){
    row= document.createElement("div");
    row.className="row";
    for(j=(3*i)+1;j<(3*i)+4;j++){
      div1=document.createElement("div");
      div1.className="ml-auto mr-auto spazio col-md-6 col-lg-4";
        div2=document.createElement("div");
        div2.className="card-coin card-plain card";
          div3=document.createElement("div");
          div3.className="card-header";
          img = document.createElement("img");
          img.alt="...";
          img.className="img-center img-fluid rounded shadow";
          img.src="/static/media/mike.fe979cd1.jpg";
          h4 = document.createElement("h4");
          h4.className="title";
          date = new Date(messaggio[j-1].createdAt);
          ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
          mo = new Intl.DateTimeFormat('it', { month: 'long' }).format(date);
          da = new Intl.DateTimeFormat('it', { day: '2-digit' }).format(date);
          h = new Intl.DateTimeFormat('it', { hour: '2-digit' }).format(date);
          m = new Intl.DateTimeFormat('it', { minute: '2-digit' }).format(date);
          h4.innerText=messaggio[j-1].IDPrenotazione +" - "+da+"/"+mo[0].toUpperCase()+mo.slice(1)+"/"+ye+" "+(h-2)+":"+m;
          div3.appendChild(img);
          div3.appendChild(h4);
          div4=document.createElement("div");
          div4.className="card-body";
            div5=document.createElement("div");
            div5.className="tab-content tab-subcategories";
              div6=document.createElement("div");
              div6.className="tab-pane active";
                div7=document.createElement("div");
                div7.className="table-responsive ps";
                  /*START table Tabella*/
                  table = document.createElement("table");
                  table.className="tablesorter table";
                    /*START thead intestazione tabella*/
                    thead = document.createElement("thead");
                    thead.className="text-primary";
                      /*START tr intestazione tabella*/
                      tr = document.createElement("tr");
                        th1 = document.createElement("th");
                        th1.className="header";
                        th1.innerHTML="Tipo Veicolo";
                        th2 = document.createElement("th");
                        th2.className="header";
                        th2.innerHTML="Data e ora";
                        th3 = document.createElement("th");
                        th3.className="header";
                        th3.innerHTML="Stato";
                      tr.appendChild(th1);
                      tr.appendChild(th2);
                      tr.appendChild(th3);
                      /*END tr intestazione tabella*/
                    thead.appendChild(tr);
                    /*END thead intestazione tabella*/
                    /*START tbody Tabella*/
                    tbody = document.createElement("tbody");
                      /*START tr tabella*/
                      tr2 = document.createElement("tr");
                        td1 = document.createElement("td");
                        td1.innerHTML="PRIMO CAMPO";
                        td2 = document.createElement("td");
                        date = new Date(messaggio[j-1].DataOra);
                        ye = new Intl.DateTimeFormat('it', { year: 'numeric' }).format(date);
                        mo = new Intl.DateTimeFormat('it', { month: 'numeric' }).format(date);
                        da = new Intl.DateTimeFormat('it', { day: 'numeric' }).format(date);
                        h = new Intl.DateTimeFormat('it', { hour: 'numeric' }).format(date);
                        m = new Intl.DateTimeFormat('it', { minute: 'numeric' }).format(date);
                        td2.innerHTML=da+"/"+mo[0].toUpperCase()+mo.slice(1)+"/"+ye+" "+(h-2)+":"+m;
                        td3 = document.createElement("td");
                        td3.innerHTML=messaggio[j-1].Stato;
                      tr2.appendChild(td1);
                      tr2.appendChild(td2);
                      tr2.appendChild(td3);
                      /*END tr tabella*/
                    tbody.appendChild(tr2);
                    /*END tbody Tabella*/
                    table.appendChild(thead);
                    table.appendChild(tbody);
                  /*END table Tabella*/
                div7.appendChild(table);
                datum = new Date(Date.UTC(ye,mo,da,h+2,m,0));
                date = datum.getTime()/1000;
                datum = new Date(Date.now());
                date_now = datum.getTime()/1000;
                //if ((date - date_now)>3200380){
                    a = document.createElement("a");
                    a.href="/modifica_prenotazione?IDPrenotazione="+messaggio[j-1].IDPrenotazione;
                      button = document.createElement("button");
                      button.className="btn-simple btn btn-primary";
                      button.innerHTML='Modifica <i class="tim-icons icon-settings"></i>';
                    a.appendChild(button);
                  div7.appendChild(a);
                //}
              div6.appendChild(div7);
            div5.appendChild(div6);
          div4.appendChild(div5);
        div2.appendChild(div3);
        div2.appendChild(div4);
      div1.appendChild(div2);
      row.appendChild(div1);
      if(j===lunghezza)
        break;
    }
    container.appendChild(row);
  }
  flag=true;
}
var flag1;
function richiedi_prenotazioni(){
  if(flag1===true){
      return true;
  }
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        stampa_prenotazioni(xmlHttp.responseText);
      }
      else if(xmlHttp.status === 500){
          alert("Non sei loggato.");
          window.location.replace("/home");
      }
  }
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.open("GET", "http://localhost:3001/api/prenotazioni?IDUtente="+utente.id, true); // true for asynchronous 
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}


export default function ProfilePage() {
  verifica_login();
  React.useEffect(() => {
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("profile-page");
    };
  },[]);
  richiedi_prenotazioni();
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
          <Container className="align-items-center" id="lista_prenotazioni" >
            <Row>
                  <Col lg="12" md="6">
                      <center>
                      <a
                      href="/nuova_prenotazione"
                      >
                      <Button
                          className="btn-simple"
                          color="primary"
                      >
                          Nuova Prenotazione <i className="tim-icons icon-simple-add"></i>
                      </Button>
                      </a>
                      </center>
                  </Col>
              </Row>
              <br></br>
          </Container>
        </div>
        <br></br>
        <Footer />
      </div>
    </>
  );
}
