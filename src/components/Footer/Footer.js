/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <center>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <h1 className="title">Uberazzi</h1>
              <p>&copy;LifeInt 2021</p>
            </Col>
            <Col lg="6" md="6">
              <Nav style={{float: "inherit"}}>
                <NavItem>
                  <NavLink href="/contattaci">
                    Contattaci
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.iubenda.com/privacy-policy/78902839" title="Uberazzi - Policy Privacy" target="_blank">
                    Policy Privacy
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            </Row>
        </Container>
      </center>
    </footer>
  );
}
