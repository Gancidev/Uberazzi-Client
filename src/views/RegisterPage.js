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
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
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

import PasswordChecklist from "react-password-checklist";


// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

var flag1, flag2;
function verifica_esistenza_email(){
  if(flag2===true){
    flag2=false;
    return true;
  }
  var email = document.getElementById("Email");
  var url = "http://localhost:3001/api/esistenza_email?Email="+email.value;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onload = function() { 
    console.log(xmlHttp.response);
      if (xmlHttp.response === '{\"message\":\"Mail Esistente.\"}'){
        //Utente registrato correttamente.
        alert("E-mail già in uso, si prega di riprovare.");
        flag1=false;
        flag2=false;
        return false;
      }
      else{
        //Utente non registrato mostra errore sulla mail
        //alert("E-mail già in uso, si prega di riprovare.");
        var url = "http://localhost:3001/api/registrazione_utente";
        fetch(url, {
            method : "POST",
            body: new FormData(document.getElementById("form_registrazione")),
            // -- or --
            // body : JSON.stringify({
                // user : document.getElementById('user').value,
                // ...
            // })
        }).then(
            response => response.text() // .json(), etc.
            // same as function(response) {return response.text();}
        ).then(
            html => console.log(html)
        );
        window.location.replace("/login");
        return true;
      }
  }
  xmlHttp.open("GET", url, true); // true for asynchronous 
  xmlHttp.send(null);
  flag2=true;
}

function verifica_dati_form(){
  if(flag1===true){
    flag1=false;
    return true;
  }
  var nome = document.form_registrazione.Nome.value;
  var cognome = document.form_registrazione.Cognome.value;
  var email = document.form_registrazione.Email.value;
  var cartaidentita = document.form_registrazione.CodiceFiscale.value;
  var datanascita = document.form_registrazione.DataDiNascita.value;
  var password = document.form_registrazione.password.value;
  var repassword = document.form_registrazione.repassword.value;
  var indirizzo = document.form_registrazione.Indirizzo.value;
  var cap = document.form_registrazione.CAP.value;
  if(nome==="" || cognome==="" || cartaidentita==="" || datanascita==="" || password==="" || repassword==="" || indirizzo==="" || cap==="" || email===""){
    alert("Inserisci tutti i dati obbligatori per continuare");
    return false;
  }
  if(password!==repassword){
    alert("Le Password non corrispondono");
    return false;
  }
  verifica_esistenza_email();
  flag1=true;
}

export default function RegisterPage() {
  const [nomeFocus, setNomeFocus] = React.useState(false);
  const [cognomeFocus, setCognomeFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [codiceFiscaleFocus, setCodiceFiscaleFocus] = React.useState(false);
  const [patenteFocus, setPatenteFocus] = React.useState(false);
  const [tipoPatenteFocus, setTipoPatenteFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [repasswordFocus, setRePasswordFocus] = React.useState(false);
  const [indirizzoFocus, setIndirizzoFocus] = React.useState(false);
  const [capFocus, setCapFocus] = React.useState(false);
  const [password, setPassword] = React.useState("");
	const [passwordAgain, setPasswordAgain] = React.useState("");
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
                <Col className="offset-md-1" lg="10" md="6">
                  <Card className="card-register" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "4em"}} > Registrazione</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_registrazione" id="form_registrazione">
                        <Row>
                          <Col className="offset-md-1" lg="5" md="6">
                              <InputGroup
                              className={classnames({
                                "input-group-focus": nomeFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-badge" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Nome*"
                                type="text"
                                name="Nome"
                                id="Nome"
                                onFocus={(e) => setNomeFocus(true)}
                                onBlur={(e) => setNomeFocus(false)}
                                required
                              />
                            </InputGroup>
                          </Col>
                          <Col className="" lg="5" md="6">
                            <InputGroup
                              className={classnames({
                                "input-group-focus": cognomeFocus,
                              })}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-badge" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Cognome*"
                                type="text"
                                name="Cognome"
                                id="Cognome"
                                onFocus={(e) => setCognomeFocus(true)}
                                onBlur={(e) => setCognomeFocus(false)}
                                required
                              />
                            </InputGroup>
                          </Col>

                        </Row>
                        <Row>
                          <Col className="offset-md-1" lg="5" md="6">
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
                              placeholder="Email*"
                              type="email"
                              name="Email"
                              id="Email"
                              onFocus={(e) => setEmailFocus(true)}
                              onChange={(e) => verifica_esistenza_email(this)}
                              onBlur={(e) => {setEmailFocus(false)}}
                              required
                            />
                          </InputGroup>
                          </Col>
                          <Col className="" lg="5" md="6">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": codiceFiscaleFocus,
                            })}
                          >
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="tim-icons icon-single-02" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Numero Carta D'Identit&agrave;*"
                            type="text"
                            name="CodiceFiscale"
                            id="CodiceFiscale"
                            onFocus={(e) => setCodiceFiscaleFocus(true)}
                            onBlur={(e) => setCodiceFiscaleFocus(false)}
                            required
                          />
                          </InputGroup>
                          </Col>
                          </Row>
                          <Row>
                          <Col className="offset-md-1" lg="5" md="6">
                            <InputGroup
                              className={classnames({
                                "input-group-focus": patenteFocus,
                              })}
                            >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-credit-card" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Numero Patente"
                              type="text"
                              name="NumeroPatente"
                              id="NumeroPatente"
                              onFocus={(e) => setPatenteFocus(true)}
                              onBlur={(e) => setPatenteFocus(false)}
                            />
                            </InputGroup>
                          </Col>
                          <Col className="" lg="5" md="6">
                            <InputGroup
                              className={classnames({
                                "input-group-focus": tipoPatenteFocus,
                              })}
                            >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-credit-card" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="TipoPatente"
                              type="text"
                              name="TipoPatente"
                              id="TipoPatente"
                              onFocus={(e) => setTipoPatenteFocus(true)}
                              onBlur={(e) => setTipoPatenteFocus(false)}
                            />
                            </InputGroup>
                            </Col>
                            </Row>
                          <Row>
                            <Col className="offset-md-1" lg="10" md="6">
                              <div className="datepicker-container" style={{color: "#171941"}}>
                                  <FormGroup>
                                      <ReactDatetime
                                      inputProps={{
                                          className: "form-control",
                                          placeholder: "Data di Nascita*",
                                          name: "DataDiNascita",
                                          id: "DataDiNascita",
                                          required: true
                                      }}
                                      />
                                  </FormGroup>
                                </div>
                              </Col>
                          </Row>
                          <Row>
                            <Col className="offset-md-1" lg="5" md="6">
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
                                  placeholder="Password*"
                                  type="password"
                                  name="password"
                                  id="password"
                                  onChange={e => setPassword(e.target.value)}
                                  onFocus={(e) => setPasswordFocus(true)}
                                  onBlur={(e) => setPasswordFocus(false)}
                                  required
                                />
                              </InputGroup>
                            </Col>
                            <Col className="" lg="5" md="6">
                                <InputGroup
                                  className={classnames({
                                    "input-group-focus": repasswordFocus,
                                  })}
                                >
                                  <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                      <i className="tim-icons icon-lock-circle" />
                                    </InputGroupText>
                                  </InputGroupAddon>
                                  <Input
                                    placeholder="Re-Password*"
                                    type="password"
                                    name="repassword"
                                    id="repassword"
                                    onChange={e => setPasswordAgain(e.target.value)}
                                    onFocus={(e) => setRePasswordFocus(true)}
                                    onBlur={(e) => setRePasswordFocus(false)}
                                    required
                                  />
                                  <PasswordChecklist
				rules={["length","specialChar","number","capital","match"]}
				minLength={8}
				value={password}
				valueAgain={passwordAgain}
				messages={{
					length: "La password deve essere di almeno 8 caratteri.",
					specialChar: "La password deve contenere caratteri speciali.",
					number: "La password deve avere almeno un numero.",
					capital: "La password deve avere almeno una lettera maiuscola.",
					match: "Le password devono coincidere.",
				}}
			/>
                                </InputGroup>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="offset-md-1" lg="7" md="6">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": indirizzoFocus,
                                })}
                              >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-square-pin" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Indirizzo*"
                                type="text"
                                name="Indirizzo"
                                id="Indirizzo"
                                onFocus={(e) => setIndirizzoFocus(true)}
                                onBlur={(e) => setIndirizzoFocus(false)}
                                required
                              />
                              </InputGroup>
                            </Col>
                            <Col className="" lg="3" md="6">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": capFocus,
                                })}
                              >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-square-pin" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="CAP*"
                                type="text"
                                name="CAP"
                                id="CAP"
                                onFocus={(e) => setCapFocus(true)}
                                onBlur={(e) => setCapFocus(false)}
                                required
                              />
                              </InputGroup>
                            </Col>
                          </Row>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="button" onClick={verifica_dati_form} id="button_reg">
                                Registrati <i className="tim-icons icon-lock-circle" />
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
