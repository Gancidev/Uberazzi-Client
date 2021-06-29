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
function inserisci_nuove_condizioni(){
  if(flag1===true){
      return true;
  }
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var id_veicolo = urlParams.get('IDVeicolo');
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);

  var url = "http://91.199.223.61:3001/api/aggiorna_condizioni_veicolo?IDVeicolo="+id_veicolo;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "POST",
      body : new FormData(document.getElementById("form_condizioni")),
  }).then(
      response => response.text()
  ).then(
    window.location.replace("/gestione_veicoli")
  );




  flag1=true;
}

export default function BoundaryTicket() {
  verifica_login();
  const [condizioniFocus, setCondizioniFocus] = React.useState(false);
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
                      <CardTitle tag="h4" style={{fontSize: "3em"}}>Condizioni Veicolo</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_condizioni" id="form_condizioni">
                      <InputGroup
                          className={classnames({
                            "input-group-focus": condizioniFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-bullet-list-67" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Condizioni Veicolo"
                            type="text"
                            name="CondizioniVeicolo"
                            id="CondizioniVeicolo"
                            onFocus={(e) => setCondizioniFocus(true)}
                            onBlur={(e) => setCondizioniFocus(false)}
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={inserisci_nuove_condizioni}>
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
