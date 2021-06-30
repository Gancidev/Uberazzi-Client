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

function controlla_risultato(html){
  let myStorage = window.localStorage;
  myStorage.setItem('Utente', JSON.stringify(html));
  let utente = JSON.parse(myStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  if(utente.message){
    alert("Password Sbagliata, si prega di riprovare");
    myStorage.clear();
    window.location.replace("/login");
  }
  else{
    window.location.replace("/home");
  }
}

var flag1;
function verifica_login(){
  if(flag1===true){
    flag1=false;
    return true;
  }
  var email = document.form_login.Email.value;
  var password = document.form_login.password.value;
  if(email==="" || password===""){
    alert("Inserisci i dati.");
    return false;
  }
  var url = "http://91.199.223.61:3001/api/login";
  fetch(url, {
      method : "POST",
      body: new FormData(document.getElementById("form_login")),
  })
  .then(
      response => response.text()
  )
  .then(
      html => controlla_risultato(html)
  );
  flag1=true;
}

export default function RegisterPage() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
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
                      <CardTitle tag="h4" style={{fontSize: "4em"}}>Login</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_login" id="form_login">
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
                            name="Email"
                            onFocus={(e) => setEmailFocus(true)}
                            onBlur={(e) => setEmailFocus(false)}
                            required
                          />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": passwordFocus,
                          })}
                        >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-lock-circle" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Password"
                            type="password"
                            id="password"
                            name="password"
                            onFocus={(e) => setPasswordFocus(true)}
                            onBlur={(e) => setPasswordFocus(false)}
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                          <a
                          href="/password-smarrita"
                          >
                            Password Smarrita?
                          </a>
                          <br></br>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={verifica_login}>
                                Accedi <i className="tim-icons icon-double-right"/>
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
