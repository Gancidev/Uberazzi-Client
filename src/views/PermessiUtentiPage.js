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