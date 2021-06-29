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
import SelectVeicoli from "components/AggiungiFoto/SelectVeicolo.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

var flag1;
function aggiungi_foto(){
  if(flag1===true){
      return true;
  }
  var file = document.getElementById("immagine");
  var idveicolo = document.getElementById("IDVeicolo");
  console.log(file);
  console.log(idveicolo);
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  var url = "http://91.199.223.61:3001/api/upload?IDVeicolo="+utente.id;
  fetch(url, {
      headers: {
        'idutente': utente.id,
        'x-access-token': utente.accessToken
      },
      method : "POST",
      body : new FormData(document.getElementById("form_immagine")),
  }).then(
      response => response.text()
  ).then(
    alert("Foto Aggiunta.")
  ).then(
    window.location.reload()
  );
  flag1=true;
}

export default function AggiungiFoto() {
  verifica_login();
  const [ritardoFocus, setRitardoFocus] = React.useState(false);
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
                      <CardTitle tag="h4" style={{fontSize: "3em"}}>Aggiungi Foto</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_immagine" id="form_immagine" enctype="multipart/form-data">
                        <SelectVeicoli/>
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
                            placeholder="Seleziona l'immagine da caricare"
                            type="file"
                            name="immagine"
                            id="immagine"
                            onFocus={(e) => setRitardoFocus(true)}
                            onBlur={(e) => setRitardoFocus(false)}
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={aggiungi_foto}>
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
