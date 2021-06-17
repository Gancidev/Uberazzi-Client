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
} from "reactstrap";

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
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
            <img src={"https://raw.githubusercontent.com/Gancidev/Uberazzi-Client/main/src/assets/img/logo.webp?token=AROXCTV2A2DLFBLI6IFL33TA2H5XM"} id="logo" alt="" Style="width:40%;"/>
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
          <Nav navbar>
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
                <DropdownItem tag={Link} to="/prenotazioni">
                  <i className="tim-icons icon-bullet-list-67" />
                  Prenotazioni
                </DropdownItem>
                <DropdownItem tag={Link} to="/permessi_utenti">
                  <i className="tim-icons icon-key-25" />
                  Permessi Utenti
                </DropdownItem>
                <DropdownItem tag={Link} to="/veicoli">
                  <i className="tim-icons icon-settings" />
                  Gestione Veicoli
                </DropdownItem>
                <DropdownItem tag={Link} to="/corse">
                  <i className="tim-icons icon-bus-front-12" />
                  Corse
                </DropdownItem>
                <DropdownItem tag={Link} to="/recupero_password">
                  <i className="tim-icons icon-lock-circle" />
                  Recupero Password
                </DropdownItem>
                <DropdownItem tag={Link} to="/notifica_ritardo">
                  <i className="tim-icons icon-alert-circle-exc" />
                  Notifica Ritardo
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
