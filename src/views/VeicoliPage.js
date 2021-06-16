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

export default function VeicoliPage() {
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
                            </Col>
                            <Table>
                                <thead>
                                    <tr>
                                    <th>ID</th>
                                    <th>Veicolo</th>
                                    <th>Condizioni</th>
                                    <th>Conferma</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td><Button className="btn-simple"
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td><Button className="btn-simple"
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                    <tr>
                                    <th scope="row">3</th>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td><Button className="btn-simple"
                                        color="success"><i className="tim-icons icon-check-2"/></Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>                             
                        <div
                            className="square square-3"
                            id="square3"
                            style={{ transform: squares1to6 }}
                        />                             
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
      </>);
}