/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
// react plugin used to create charts
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";
import Maps from "components/google_maps.js";


export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);
  return (
    <>
      <PersonalNavBar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className=" shapes path"
            src={require("assets/veicoli/auto1.png").default}
          />
          <img
            alt="..."
            className="path2"
            src={require("assets/veicoli/auto2.png").default}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={require("assets/veicoli/moto1.png").default}
          />
          <img
            alt="..."
            className="shapes wave"
            src={require("assets/veicoli/moto2.png").default}
          />
          <img
            alt="..."
            className="shapes squares"
            src={require("assets/veicoli/bici1.png").default}
          />
          <img
            alt="..."
            className="shapes circle"
            src={require("assets/veicoli/monopattino1.png").default}
          />
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                  Non hai un mezzo e non sai come spostarti?
                </h1>
                <p className="text-white mb-3">
                Non ?? un problema! <br></br>
                Noi di Uberazzi ti forniamo una vasta gamma di veicoli, sarai tu a decidere qual ?? il veicolo pi?? adatto alle tue esigenze, 
                che si tratti di un???automobile o di una semplice bicicletti. <br></br>
                E se non hai la patente non preoccuparti, puoi sempre richiedere la presenza di un???autista per le automobili.
                </p>
                <div className="btn-wrapper mb-3">
                  <p className="category text-primary d-inline">
                    Leggi Altro
                  </p>
                  <Button
                    className="btn-link"
                    color="primary"
                    href="#faq"
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
              {!window.localStorage.getItem("Utente") && <Col lg="4" md="5">
                <Button
                  className="btn-simple"
                  color="primary"
                  href="/login"
                >
                  Accedi <i className="tim-icons icon-double-right"/>
                </Button>
                <br></br>
                <Button
                  className="btn-simple bottone_premuto"
                  color="danger"
                  href="/registrazione"
                >
                  Registrati <i className="tim-icons icon-lock-circle" />
                </Button>
              </Col>}
            </Row>
          </div>
        </div>
        <section className="section section-lg" id="faq" style={{background: "#17192D"}}>
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center" style={{marginBottom:"inherit"}}>Domande Frequenti</h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-world" />
                      </div>
                      <h4 className="info-title">Cos&#39;&egrave; Uberazzi?</h4>
                      <hr className="line-primary" />
                      <p style={{textAlign: "justify"}}>
                      Uberazzi ti permette di prenotare una corsa con un veicolo a tua scelta secondo le tue esigenze. 
                      Il vasto parco veicoli &egrave; stato pensato per venire incontro a quante pi&ugrave; necessit&agrave; possibili, 
                      permettendo l&#39;utilizzo di automobili, motori e persino biciclette o monopattini.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-delivery-fast" />
                      </div>
                      <h4 className="info-title">Come prenoto una corsa?</h4>
                      <hr className="line-warning" />
                      <p style={{textAlign: "justify"}}>
                      Prenotare una corsa &egrave; facile!
                      Basta registrarsi dall&#39;apposita sezione e successivamente selezionare la voce &rdquo;Nuova prenotazione&ldquo; dal profilo.
                      Per effettuare la prenotazione bisogna indicare data e ora della corsa, punto di partenza e di arrivo, 
                      in modo da fornirti una accurata libert&agrave; di scelta sul veicolo da utilizzare.
                      Inoltre per le automobili &egrave; prevista la presenza di un autista o meno.
                      </p>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-map-big" />
                      </div>
                      <h4 className="info-title">Dove posso lasciare il mezzo in caso di necessit&agrave;?</h4>
                      <hr className="line-success" />
                      <p style={{textAlign: "justify"}}>
                      Uberazzi mette a disposizione dei clienti diversi parcheggi e stalli dove ritirare o lasciare i mezzi a fine corsa, 
                      ma per qualsiasi necessit&agrave; &egrave; possibile lasciare i mezzi anche al di fuori degli appositi stalli/parcheggi.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg section-safe">
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/guida.jpg").default}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100%</CardTitle>
                        <p className="card-category text-white">
                          Sicuro
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">5K</CardTitle>
                        <p className="card-category text-white">
                          Clienti Soddisfatti
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">100</CardTitle>
                        <p className="card-category text-white">Mezzi Disponibili</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-primary" />
                  <h3>Prenota in modo <b>Sicuro</b> e <b>Veloce</b>.</h3>
                  <p>
                    Sfrutta la sicurezza di poter prenotare un mezzo efficiente e sottoposto a manutenzione giornaliera,
                    con una rapidit?? unica data dai nostri sistemi di gestione delle richieste e dal personale che se ne occupa.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-money-coins" />
                        </div>
                        <div className="ml-3">
                          <h6>Pagamenti Sicuri</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-badge" />
                        </div>
                        <div className="ml-3">
                          <h6>Autisti solo Verificati</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-primary mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>Interfaccia User Friendly</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section section-lg" style={{paddingBottom:"10px", background: "#17192D",paddingTop:"10px",}}>
          <Col md="12">
            <Card className="card-chart card-plain">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="12">
                    <hr className="line-info" />
                    <h5 className="card-category">N.B. Il servizio &egrave; attivo solamente a Palermo e provincia.</h5>
                    <CardTitle tag="h3">Qui di seguito riportiamo le posizioni degli stalli e dei parcheggi, cos&igrave; potrai trovare il punto di ritiro pi&ugrave; vicino a casa tua.</CardTitle>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart-area">
                  <Maps></Maps>
                </div>
              </CardBody>
            </Card>
          </Col>
        </section>
        <Footer />
      </div>
    </>
  );
}
