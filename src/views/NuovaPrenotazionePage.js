/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import validator from 'validator';
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
  Modal,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";
import SelectVeicoli from "components/NuovaPrenotazione/SelectVeicolo.js";
import ConfermaAutista from "components/NuovaPrenotazione/ConfermaAutista.js";
import ManciaAutista from "components/NuovaPrenotazione/ManciaAutista.js";

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

export default function NuovaPrenotazione() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [partenzaF, setPartenzaF] = React.useState(false);
  const [destinazioneF, setDestinazioneF] = React.useState(false);
  const [nome, setNome] = React.useState(false);
  const [scadenza, setScadenza] = React.useState(false);
  const [numero, setNumero] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);

  const [errorMessage, setErrorMessage] = React.useState('')
    
  const validateCreditCard = (value) => {
    
    if (validator.isCreditCard(value)) {
      setErrorMessage('Numero Carta Valida.')
    } else {
      setErrorMessage('Numero carta non valido!')
    }
  }
  
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
                      <br></br>
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
                        <SelectVeicoli/>
                        <ConfermaAutista/>
                        <ManciaAutista/>
                        <FormGroup check id="paga" className="text-left" style={{display: "none"}}>
                            <Button
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => setFormModal(true)}
                            >
                                Concludi e Paga <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                      </Form>
                          {/* Start Form Modal */}
                          <Modal
                            modalClassName="modal-black"
                            isOpen={formModal}
                            toggle={() => setFormModal(false)}
                          >
                            <div className="modal-header justify-content-center">
                              <button className="close" onClick={() => setFormModal(false)}>
                                <i className="tim-icons icon-simple-remove text-white" />
                              </button>
                              <div className="text-muted text-center ml-auto mr-auto">
                                <h3 className="mb-0">Inserisci i dati della tua carta</h3>
                              </div>
                            </div>
                            <div className="modal-body">
                              <Form role="form">
                                <FormGroup className="mb-3">
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": numero,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-credit-card" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Numero Carta (tutto attaccato)"
                                      type="text"
                                      onFocus={(e) => setNumero(true)}
                                      onBlur={(e) => setNumero(false)}
                                      onChange={(e) => validateCreditCard(e.target.value)}
                                    />
                                    <span style={{
                                        fontWeight: 'bold',
                                      }}>{errorMessage}
                                    </span>
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": nome,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-single-02" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Nome"
                                      type="text"
                                      onFocus={(e) => setNome(true)}
                                      onBlur={(e) => setNome(false)}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <FormGroup>
                                  <InputGroup
                                    className={classnames("input-group-alternative", {
                                      "input-group-focus": scadenza,
                                    })}
                                  >
                                    <InputGroupAddon addonType="prepend">
                                      <InputGroupText>
                                        <i className="tim-icons icon-calendar-60" />
                                      </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                      placeholder="Scadenza"
                                      type="text"
                                      onFocus={(e) => setScadenza(true)}
                                      onBlur={(e) => setScadenza(false)}
                                    />
                                  </InputGroup>
                                </FormGroup>
                                <div className="text-center">
                                  <Button className="my-4" color="primary" type="button">
                                    Paga
                                  </Button>
                                </div>
                              </Form>
                            </div>
                          </Modal>
                          {/* End Form Modal */}
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