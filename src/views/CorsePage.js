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

// reactstrap components
import {
    Button,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

function conferma_corsa(id){
    alert("La Corsa: "+ id +" e' stata accettata.")
}

export default function CorsePage() {
  React.useEffect(() => {
    document.body.classList.toggle("register-page");
    document.documentElement.addEventListener("mousemove", followCursor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("register-page");
      document.documentElement.removeEventListener("mousemove", followCursor);
    };
  },[]);
  const followCursor = (event) => {}
  return(
    <>
    <PersonalNavBar />
        <div className="wrapper">
            <div className="page-header">
                <div className="content">
                <Container className="align-items-center">
                        <Row>
                            <Col className="offset-md-3" lg="5" md="6">
                            </Col>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Partenza</th>
                                    <th>Arrivo</th>
                                    <th>Data e Ora</th>
                                    <th>Accetta</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Palermo</td>
                                    <td>Catania</td>
                                    <td>07/06/2021 15:30</td>
                                    <td><Button className="btn-simple"
                                        color="success"
                                        onClick={() => conferma_corsa(1)}
                                        ><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>VIa Ernesto Basile 15</td>
                                    <td>Piazza Scaffa</td>
                                    <td>07/06/2021 15:30</td>
                                    <td><Button className="btn-simple"
                                        color="success"
                                        onClick={() => conferma_corsa(2)}
                                        ><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Via Dei Vespri 23</td>
                                    <td>Viale Lazio 33</td>
                                    <td>17/03/2021 12:30</td>
                                    <td><Button className="btn-simple"
                                        color="success"
                                        onClick={() => conferma_corsa(3)}
                                        ><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>                                                         
                    </Container>                    
                </div>
            </div>
            <Footer />
        </div>
    </>);
}