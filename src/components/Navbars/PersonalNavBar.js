/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Modal,
} from "reactstrap";

function logout(){
  window.localStorage.clear();
  window.location="/home";
}

export default function IndexNavbar() {
  //ACCESSO AI DATI UTENTE POST LOGIN
  let utente = JSON.parse(window.localStorage.getItem("Utente"));
  utente = JSON.parse(utente);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    var logo = document.getElementById("logo");
    if (
      document.documentElement.scrollTop > 50 ||
      document.body.scrollTop > 50
    ) {
      logo.style.width="15%";
      setColor("bg-primario");
    } else if (
      document.documentElement.scrollTop < 51 ||
      document.body.scrollTop < 51
    ) {
      logo = document.getElementById("logo");
      logo.style.width="40%";
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand id="navbar-brand">
            <img src={"https://raw.githubusercontent.com/Gancidev/Uberazzi-Client/main/src/assets/img/logo.webp?token=AROXCTQNP2G52TBPBDRDMHDA325X4"} id="logo" alt="" Style="width:40%;"/>
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Uberazzi
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          {window.localStorage.getItem("Utente") && <Nav navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle
                caret
                color="default"
                data-toggle="dropdown"
                href="#pablo"
                nav
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-cogs d-lg-none d-xl-none" />
                Navigazione
              </DropdownToggle>
              <DropdownMenu className="dropdown-with-icons">
                <DropdownItem tag={Link} to="/home">
                  <i className="tim-icons icon-paper" />
                  Home
                </DropdownItem>
                <DropdownItem tag={Link} to="/profilo">
                  <i className="tim-icons icon-single-02" />
                  Profilo
                </DropdownItem>
                {window.localStorage.getItem("Utente") && utente.IDPermesso===1 &&<DropdownItem tag={Link} to="/prenotazioni">
                  <i className="tim-icons icon-bullet-list-67" />
                  Prenotazioni
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso<4  &&<DropdownItem tag={Link} to="/notifica_ritardo">
                  <i className="tim-icons icon-alert-circle-exc" />
                  Notifica Ritardo
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===2  &&<DropdownItem tag={Link} to="/consegna_veicoli">
                  <i className="tim-icons icon-bus-front-12" />
                  Consegna Veicoli
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===2  && <DropdownItem tag={Link} to="/ritiro_veicolo">
                  <i className="tim-icons icon-bus-front-12" />
                  Ritira Veicolo
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===1  &&<DropdownItem tag={Link} to="/consegna_veicoli_cliente">
                  <i className="tim-icons icon-bus-front-12" />
                  Consegna Veicoli
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===1  && <DropdownItem tag={Link} to="/ritiro_veicolo_cliente">
                  <i className="tim-icons icon-bus-front-12" />
                  Ritira Veicolo
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===2 &&<DropdownItem tag={Link} to="/gestione_veicoli">
                  <i className="tim-icons icon-settings" />
                  Gestione Veicoli
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===3 &&<DropdownItem tag={Link} to="/corse">
                  <i className="tim-icons icon-bus-front-12" />
                  Corse
                </DropdownItem>}

                { window.localStorage.getItem("Utente") && utente.IDPermesso===4 && <DropdownItem tag={Link} to="/permessi_utenti">
                  <i className="tim-icons icon-key-25" />
                  Permessi Utenti
                </DropdownItem>}
                {window.localStorage.getItem("Utente") && utente.IDPermesso===4 && <DropdownItem tag={Link} to="/gestione_prenotazioni">
                  <i className="tim-icons icon-key-25" />
                  Gestione Prenotazioni
                </DropdownItem>}

                {window.localStorage.getItem("Utente") && utente.IDPermesso===4 && <DropdownItem tag={Link} to="/nuovo_veicolo">
                  <i className="tim-icons icon-bus-front-12" />
                  Nuovo Veicolo
                </DropdownItem>}

                {window.localStorage.getItem("Utente") && <DropdownItem tag={Link} onClick={() => { setMiniModal(true)}}>
                  <i className="tim-icons icon-key-25" />
                  Logout
                </DropdownItem>}                
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>}
        </Collapse>
      </Container>
      {/* Start Mini Modal */}
      <Modal
              modalClassName="modal-mini modal-primario modal-mini"
              isOpen={miniModal}
              toggle={() => setMiniModal(false)}
            >
              <div className="modal-header justify-content-center">
                <button className="close" onClick={() => setMiniModal(false)}>
                  <i className="tim-icons icon-simple-remove text-white" />
                </button>
                <div className="modal-profile">
                  <i className="tim-icons icon-single-02" />
                </div>
              </div>
              <div className="modal-body">
                <p>Sicuro di voler effettuare il logout?</p>
              </div>
              <div className="modal-footer">
                <Button className="btn-neutral" color="link" type="button" onClick={() => {setMiniModal(false);}}>
                  No
                </Button>
                <Button
                  className="btn-neutral"
                  color="link"
                  onClick={() => {setMiniModal(false); logout();}}
                  type="button"
                >
                  Si
                </Button>
              </div>
            </Modal>
            {/* End Mini Modal */}
    </Navbar>
  );
}
