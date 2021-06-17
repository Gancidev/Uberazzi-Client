/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";

let ps = null;

export default function ProfilePage() {
  const [tabs] = React.useState(1);
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  },[]);
  return (
    <>
      <PersonalNavBar />
      <div className="wrapper">
        <div className="page-header" style={{maxHeight: "inherit"}}>
          <img
            alt="..."
            className="path"
            src={require("assets/path_rosa/path4.png").default}
          />
          <Container className="align-items-center">
            <Row>
              <Col className="ml-auto mr-auto spazio" lg="4" md="6" >
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded shadow"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h4 className="title">ID Prenotazione - Data e Ora (in cui è stata effettuata)</h4>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Tipo Veicolo</th>
                              <th className="header">Data e Ora della prenotazione</th>
                              <th className="header">Stato</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Auto</td>
                              <td>12/06/2021 20:00 - 22:00</td>
                              <td>Completata</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto spazio" lg="4" md="6" >
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded shadow"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h4 className="title">ID Prenotazione - Data e Ora (in cui è stata effettuata)</h4>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Tipo Veicolo</th>
                              <th className="header">Data e Ora della prenotazione</th>
                              <th className="header">Stato</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Moto</td>
                              <td>13/06/2021 20:00 - 21:00</td>
                              <td>Annullata</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto mr-auto" lg="4" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded shadow"
                      src={require("assets/img/mike.jpg").default}
                    />
                    <h4 className="title">ID Prenotazione - Data e Ora (in cui è stata effettuata)</h4>
                  </CardHeader>
                  <CardBody>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Tipo Veicolo</th>
                              <th className="header">Data e Ora della prenotazione</th>
                              <th className="header">Stato</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Bici</td>
                              <td>14/06/2021 17:00 - 20:00</td>
                              <td>Attiva</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <a
                                    href="/modifica_prenotazione?id=3"
                                    >
                                    <Button
                                        className="btn-simple"
                                        color="primary"
                                    >
                                        Modifica <i className="tim-icons icon-settings-gear-63"></i>
                                    </Button>
                                    </a>
                                </td>
                                <td></td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
                <Col lg="12" md="6">
                    <center>
                    <a
                    href="/nuova_prenotazione"
                    >
                    <Button
                        className="btn-simple"
                        color="primary"
                    >
                        Nuova Prenotazione <i className="tim-icons icon-simple-add"></i>
                    </Button>
                    </a>
                    </center>
                </Col>
            </Row>
          </Container>
        </div>
        <br></br>
        <Footer />
      </div>
    </>
  );
}
