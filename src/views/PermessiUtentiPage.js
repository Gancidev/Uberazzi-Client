/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";
import SelectPermessi from "components/PermessiUtenti/select_permessi.js";

// reactstrap components
import {
    Button,
    Table,
    Container,
    Row,
    Col,
    Form,
    Modal,
  } from "reactstrap";

  var id_utente=0;

export default function PermessiUtenti() {
    const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [formModal, setFormModal] = React.useState(false);
  function apriForm(id){
      console.log(id);
      id_utente = id;
      setFormModal(true);
    }
  function assegna_permessi(){
      var permessi = document.getElementById("selezione_permessi");
      alert("Assegno i permessi: "+permessi.value+" All'utente:"+id_utente);

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
                            <img
                                    alt="..."
                                    className="square square-7_personale"
                                    id="square7"
                                    src={require("assets/veicoli/auto1.png").default}
                                    style={{ transform: squares7and8 }}
                                />
                                <img
                                    alt="..."
                                    className="square square-8_personale"
                                    id="square8"
                                    src={require("assets/veicoli/auto2.png").default}
                                    style={{ transform: squares7and8 }}
                                />
                                <img
                                    alt="..."
                                    className="square square-4_personale"
                                    id="square4"
                                    src={require("assets/veicoli/moto1.png").default}
                                    style={{ transform: squares1to6 }}
                                />
                                <img
                                    alt="..."
                                    className="square square-5_personale"
                                    id="square5"
                                    src={require("assets/veicoli/moto3.png").default}
                                    style={{ transform: squares1to6 }}
                                />
                                <img
                                    alt="..."
                                    className="square square-6_personale"
                                    id="square6"
                                    src={require("assets/veicoli/monopattino1.png").default}
                                    style={{ transform: squares1to6 }}
                                />
                        </Col>
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
                                <td>
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        onClick={() => apriForm(2)}
                                    >
                                        <i className="tim-icons icon-settings-gear-63"></i>
                                    </Button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>larry@twitter.org</td>
                                <td>
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                        onClick={() => apriForm(3)}
                                    >
                                        <i className="tim-icons icon-settings-gear-63"></i>
                                    </Button>
                                </td>
                                </tr>
                            </tbody>
                        </Table>
                        </Row>
                        <img
                            alt="..."
                            className="square square-3_personale"
                            id="square3"
                            src={require("assets/veicoli/bici1.png").default}
                            style={{ transform: squares1to6 }}
                        /> 
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
                                <h3 className="mb-0">Seleziona i permessi per l&#39;utente</h3>
                            </div>
                            </div>
                            <div className="modal-body">
                            <Form role="form">
                                <SelectPermessi/>
                                <div className="text-center">
                                <Button className="my-4" color="primary" type="button"
                                onClick={() => assegna_permessi()}>
                                    Assegna
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