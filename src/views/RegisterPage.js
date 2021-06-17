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

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

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
                      <Form className="form" method="post" action="registrazione.js">
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
                              onFocus={(e) => setEmailFocus(true)}
                              onBlur={(e) => setEmailFocus(false)}
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
                                    onFocus={(e) => setRePasswordFocus(true)}
                                    onBlur={(e) => setRePasswordFocus(false)}
                                    required
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
                                onFocus={(e) => setCapFocus(true)}
                                onBlur={(e) => setCapFocus(false)}
                                required
                              />
                              </InputGroup>
                            </Col>
                          </Row>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="submit">
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
