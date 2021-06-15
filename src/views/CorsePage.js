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

// reactstrap components
import {
    Button,
    Table,
    Container,
    Row,
    Col,
  } from "reactstrap";

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
  }
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
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>VIa Ernesto Basile 15</td>
                                    <td>Piazza Scaffa</td>
                                    <td>07/06/2021 15:30</td>
                                    <td><Button className="btn-simple"
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Via Dei Vespri 23</td>
                                    <td>Viale Lazio 33</td>
                                    <td>17/03/2021 12:30</td>
                                    <td><Button className="btn-simple"
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
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