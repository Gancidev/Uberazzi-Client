/*!
=========================================================
* Uberazzi - v1.1.1
=========================================================
* Coded by LifeInt
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import PersonalNavBar from "components/Navbars/PersonalNavBar.js";
import Footer from "components/Footer/Footer.js";
import SelectParcheggi from "components/NuovoVeicolo/SelectParcheggi.js";

function aggiungi_veicolo(){
    var nome = document.getElementById("nome");
    var targa_identificativo = document.getElementById("targa_identificativo");
    var prezzo = document.getElementById("prezzo");
    var parcheggio = document.getElementById("parcheggio");
    if(nome.value!=="" && targa_identificativo.value!=="" && prezzo.value!=="" && parcheggio.value!=="NONE"){
        alert("Veicolo Aggiunto.");
        document.form_veicolo.method = "post";
        document.form_veicolo.action = "add_veicolo.js";
        document.form_veicolo.submit();
        return true;
    }
    else{
        alert("Fornire tutti i campi prima di procedere.");
        return false;
    }
}

export default function NuovoVeicolo() {
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [nome, setNomeF] = React.useState(false);
  const [targa_identificativo, setTargaIdentificativoF] = React.useState(false);
  const [prezzo, setPrezzoF] = React.useState(false);
  
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
  return (
    <>
      <PersonalNavBar />
      <div className="wrapper">
        <div className="page-header">
          <div className="page-header-image" />
          <div className="content">
            <Container>
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
                  <Card className="card-register" style={{overflow: "inherit"}}>
                    <CardHeader>
                      <br></br>
                      <CardTitle tag="h4" style={{fontSize: "3em"}} > Nuovo Veicolo</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Form className="form" name="form_veicolo" method="" action="" id="form_veicolo">
                        <InputGroup
                          className={classnames({
                            "input-group-focus": nome,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="nome"
                          placeholder="Nome*"
                          type="text"
                          onFocus={(e) => setNomeF(true)}
                          onBlur={(e) => setNomeF(false)}
                          required
                        />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": targa_identificativo,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="targa_identificativo"
                          placeholder="Targa o Identificativo*"
                          type="text"
                          onFocus={(e) => setTargaIdentificativoF(true)}
                          onBlur={(e) => setTargaIdentificativoF(false)}
                          required
                        />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": prezzo,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="prezzo"
                          placeholder="Prezzo*"
                          type="text"
                          onFocus={(e) => setPrezzoF(true)}
                          onBlur={(e) => setPrezzoF(false)}
                          required
                        />
                        </InputGroup>
                        <SelectParcheggi/>
                        <FormGroup check className="text-left">
                            <Button 
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                                onClick={() => aggiungi_veicolo()}
                            >
                                Carica <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                        <FormGroup check id="paga" className="text-left" style={{display: "none"}}>
                            <Button
                                type="button"
                                className="btn-round" 
                                color="primary" 
                                size="lg"
                            >
                                Concludi e Paga <i className="tim-icons icon-double-right"/>
                            </Button>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className="register-bg" />
              <div
                className="square square-1"
                id="square1"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-2"
                id="square2"
                style={{ transform: squares1to6 }}
              />
              <div
                className="square square-3"
                id="square3"
                style={{ transform: squares1to6 }}
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
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}