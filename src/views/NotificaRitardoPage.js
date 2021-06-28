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
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

var flag1;
function notifica_ritardo(){
  if(flag1===true){
      return true;
  }
  var ritardo = document.getElementById("ritardo").value;
  var id_prenotazione = document.getElementById("id_prenotazione").value;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
        alert("Notifica inviata");
        window.location.replace("/home");
      }
      else if(xmlHttp.status === 403){
          alert("Non hai i permessi per accedere qui");
          window.location.replace("/home");
      }
  }
  xmlHttp.open("GET", "http://localhost:3001/api/notifica_ritardo?IDPrenotazione="+id_prenotazione+"&note="+ritardo, true); // true for asynchronous 
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  xmlHttp.setRequestHeader("idutente", utente.id);
  xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
  xmlHttp.send(null);
  flag1=true;
}

export default function NotificaRitardo() {
  verifica_login();
  const [ritardoFocus, setRitardoFocus] = React.useState(false);
  const [idPrenotazioneFocus, setIDPrenotazioneFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
    };
  },[]);
  
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
                  <Card className="card-register">
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}}>Notifica Ritardo</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                      <InputGroup
                          className={classnames({
                            "input-group-focus": idPrenotazioneFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-bullet-list-67" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="IDPrenotazione"
                            type="number"
                            name="id_prenotazione"
                            id="id_prenotazione"
                            onFocus={(e) => setIDPrenotazioneFocus(true)}
                            onBlur={(e) => setIDPrenotazioneFocus(false)}
                            required
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": ritardoFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Tempo Stimato (in minuti)"
                            type="number"
                            name="ritardo"
                            id="ritardo"
                            onFocus={(e) => setRitardoFocus(true)}
                            onBlur={(e) => setRitardoFocus(false)}
                            min="5"
                            step="5"
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={notifica_ritardo}>
                                Invia <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                      </Form>
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
