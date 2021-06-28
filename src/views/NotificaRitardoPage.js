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
                      <Form className="form" method="post" action="login.js">
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
                            onFocus={(e) => setRitardoFocus(true)}
                            onBlur={(e) => setRitardoFocus(false)}
                            min="5"
                            step="5"
                            required
                          />
                        </InputGroup>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="submit">
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
