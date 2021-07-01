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

function risultato(messaggio){
  messaggio = JSON.parse(messaggio);
  if(messaggio.message==="password resettata, verifica nel log"){
      var password = document.getElementById("nuova_password");
      password.value=messaggio.password;
      var form_div = document.getElementById("form_div");
      form_div.style.display="none";
      var password_div = document.getElementById("password_div");
      password_div.style.display="block";
  }
  else{
    alert("Errore nell'aggiornamento della password, si prega di riprovare.");
  }
}

function check(messaggio,email){
  messaggio = JSON.parse(messaggio);
  if(messaggio.message==="Utente non trovato."){
    alert("L'email inserita non risulta registrata nei nostri sistemi.");
  }
  else{
    var url = "http://91.199.223.61:3001/api/recupera_password?Email="+email;
    fetch(url, {
        method : "GET",
    }).then(
        response => response.text()
    ).then(
      html => risultato(html)
    );
  }
}


function recupera(){
  var email = document.getElementById("Email");
  if(email.value===""){
    alert("Devi prima inserire l'email per il quale effettuare il recupero.");
    return false;
  }
  var url = "http://91.199.223.61:3001/api/esistenza_email?Email="+email.value;
  fetch(url, {
      method : "GET",
  }).then(
      response => response.text()
  ).then(
    html => check(html, email.value)
  );
}

export default function RecuperoPasswordPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
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
              <Row id="form_div">
                <Col className="offset-md-3" lg="5" md="6">
                  <Card className="card-register">
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}}>Recupero Password</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": emailFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Email"
                            type="email"
                            id="Email"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={recupera}>
                                Recupera <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <Row id="password_div" style={{display: "none"}}>
                <Col className="offset-md-3" lg="5" md="6">
                  <Card className="card-register">
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}}>Nuova Password</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-email-85" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="text"
                            id="nuova_password"
                            disabled
                          />
                        </InputGroup>
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
