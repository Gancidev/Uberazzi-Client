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
//import ReactDatetime from "react-datetime";
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
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [testoFocus, setTestoFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [soggettoFocus, setSoggettoFocus] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle("contattaci");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("contattaci");
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
                  <div
                    className="square square-7"
                    id="square7"
                    style={{ transform: squares7and8 }}
                  />
                  <div
                    className="square square-8"
                    id="square8"
                    style={{ transform: squares7and8 }}
                  />
                  <Card className="card-contattaci" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "4em"}} >Contattaci</CardTitle>
                    </CardHeader>
                    <small>Compila questo form per inviarci un messaggio</small>
                    <CardBody>
                      <Form className="form" method="post" action="contattaci.js">
                        <Row>
                          <Col className="offset-md-2" lg="8" md="6">
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
                                    type="text"
                                    onFocus={(e) => setEmailFocus(true)}
                                    onBlur={(e) => setEmailFocus(false)}
                                    required
                                />
                              </InputGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="offset-md-2" lg="8" md="6">
                            <InputGroup
                            className={classnames({
                            "input-group-focus": soggettoFocus,
                            })}
                            >
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="tim-icons icon-single-02" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Soggetto*"
                                    type="text"
                                    onFocus={(e) => setSoggettoFocus(true)}
                                    onBlur={(e) => setSoggettoFocus(false)}
                                    required
                                />
                            </InputGroup>
                          </Col>
                        </Row>
                        <Row>
                            <Col className="offset-md-2" lg="8" md="6">
                              <InputGroup
                                className={classnames({
                                  "input-group-focus": testoFocus,
                                })}
                              >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="tim-icons icon-paper" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input onFocus
                                placeholder="Testo messaggio"
                                type="textarea"
                                onFocus={(e) => setTestoFocus(true)}
                                onBlur={(e) => setTestoFocus(false)}
                                required
                              />
                              </InputGroup>
                            </Col>
                        </Row>
                        <FormGroup check>
                            <Button className="btn-round" color="primary" size="lg" type="submit">
                                Contattaci <i className="tim-icons icon-bell-55" />
                            </Button>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-4"
                id="square4"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-5"
                id="square5"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-6"
                id="square6"
                style={{ transform: squares1to6 }}
              />
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}