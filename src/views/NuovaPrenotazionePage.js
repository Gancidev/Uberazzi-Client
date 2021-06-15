/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

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
import SelectVeicoli from "components/NuovaPrenotazione/select_veicolo.js";
import ConfermaAutista from "components/NuovaPrenotazione/conferma_autista.js";
import ManciaAutista from "components/NuovaPrenotazione/mancia.js";

function check_disponibilita(){
    var partenza = document.getElementById("partenza");
    var destinazione = document.getElementById("destinazione");
    var dataora = document.getElementById("dataora");
    if(partenza.value!=="" && destinazione.value!=="" && dataora.value!==""){
        var selectVeicoli = document.getElementById("selectVeicoli");
        selectVeicoli.style.display="block";
    }
    else{
        alert("Seleziona prima Partenza, Destinazione, Data e Ora");
    }
}

export default function RegisterPage() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [partenzaF, setPartenzaF] = React.useState(false);
  const [destinazioneF, setDestinazioneF] = React.useState(false);
  
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
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
                <Col className="offset-md-3" lg="5" md="6">
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
                  <Card className="card-register" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <CardTitle tag="h4" style={{fontSize: "3em"}} > Nuova Prenotazione</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" method="post" action="new_.js" id="form_prenotazione">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": partenzaF,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="partenza"
                          placeholder="Partenza*"
                          type="text"
                          onFocus={(e) => setPartenzaF(true)}
                          onBlur={(e) => setPartenzaF(false)}
                          required
                        />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": destinazioneF,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="destinazione"
                          placeholder="Destinazione*"
                          type="text"
                          onFocus={(e) => setDestinazioneF(true)}
                          onBlur={(e) => setDestinazioneF(false)}
                          required
                        />
                        </InputGroup>
                        <div className="datepicker-container" style={{color: "#171941"}}>
                            <FormGroup>
                                <ReactDatetime
                                inputProps={{
                                    id:"dataora",
                                    className: "form-control",
                                    placeholder: "Data e Ora",
                                }}
                                />
                            </FormGroup>
                            </div>
                        <FormGroup check className="text-left">
                            <Button 
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => check_disponibilita()}
                            >
                                Procedi <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                        <SelectVeicoli>
                        </SelectVeicoli>
                        <ConfermaAutista>
                        </ConfermaAutista>
                        <ManciaAutista>
                        </ManciaAutista>
                        <FormGroup check id="paga" className="text-left" style={{display: "none"}}>
                            <Button
                                type="submit"
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => check_disponibilita()}
                            >
                                Concludi e Paga <i className="tim-icons icon-double-right"/>
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