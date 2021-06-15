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
import validator from 'validator';
import classnames from "classnames";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

// reactstrap components
import {
    Button,
    Table,
    Container,
    Row,
    Col,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Modal,
  } from "reactstrap";
import { NULL } from "node-sass";

  

export default function PermessiUtenti() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [nome, setNome] = React.useState(false);
  const [scadenza, setScadenza] = React.useState(false);
  const [numero, setNumero] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  var id_utente = NULL;
  function apriForm(id){
        setFormModal(true);
        id_utente = id;
    }
  function assegna_permessi(permessi){
      alert("Assegno i permessi"+permessi+" All'utente:"+id_utente);

  }
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
    return(
      <>
        <PersonalNavBar />
        <div className="wrapper">
            <div className="page-header">
                <div className="content">
                    <Container className="align-items-center">
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
                        </Col>
                    </Row>
                        <Table striped variant="dark">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nome</th>
                                    <th>Cognome</th>
                                    <th>Email</th>
                                    <th>Modifica Ruolo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>mark@mdo.it</td>
                                <td>
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        onClick={() => apriForm(1)}
                                    >
                                        <i className="tim-icons icon-settings-gear-63"></i>
                                    </Button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>jacob@fat.com</td>
                                <td>mark@mdo.it</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>larry@twitter.org</td>
                                <td>mark@mdo.it</td>
                                </tr>
                            </tbody>
                        </Table>
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
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
      </>);
}