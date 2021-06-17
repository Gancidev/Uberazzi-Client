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
    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
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
                        <img
                            alt="..."
                            className="square square-3_personale"
                            id="square3"
                            src={require("assets/veicoli/bici1.png").default}
                            style={{ transform: squares1to6 }}
                        />                                                           
                    </Container>                    
                </div>
            </div>
            <Footer />
        </div>
    </>);
}