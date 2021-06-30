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
import SelectTipo from "components/NuovoVeicolo/SelectTipo.js";

function verifica_login(){
  if(!window.localStorage.getItem("Utente")){
    window.location.replace("/home");
  }
}

function controlla_risultato(html){
  let passaggio = JSON.stringify(html);
  let risultato = JSON.parse(passaggio);
  risultato = JSON.parse(risultato);
  console.log(risultato);
  if(risultato.message==="Veicolo aggiunto"){
    alert("Veicolo Aggiunto Con Successo");
    window.location.replace("/nuovo_veicolo");
  }
  else{
    alert("Veicolo Non Aggiunto, errore nella creazione del veicolo.");
    window.location.replace("/nuovo_veicolo");
  }
}

function aggiungi_veicolo(){
    var tipoveicolo = document.getElementById("TipoVeicolo");
    var targa = document.getElementById("Targa");
    var nome = document.getElementById("Nome");
    var prezzo = document.getElementById("Prezzo");
    var parcheggio = document.getElementById("Parcheggio");
    var numeroposti = document.getElementById("NumeroPosti");
    if(tipoveicolo.value!=="NONE" && targa.value!=="" && numeroposti.value!=="" && parcheggio.value!=="NONE" && prezzo.value!==""&& nome.value!==""){
      //ACCESSO AI DATI UTENTE POST LOGIN
      let utente = JSON.parse(window.localStorage.getItem("Utente"));
      utente = JSON.parse(utente);
      var url = "http://91.199.223.61:3001/api/nuovo_veicolo";
      fetch(url, {
        headers: {
          'idutente': utente.id,
          'x-access-token': utente.accessToken
        },
          method : "POST",
          body: new FormData(document.getElementById("form_nuovo_veicolo")),
      }).then(
          response => response.text()
      ).then(
        html => controlla_risultato(html)
      );
        return true;
    }
    else{
        alert("Fornire tutti i campi prima di procedere.");
        return false;
    }
}

export default function NuovoVeicolo() {
  verifica_login();
  const [squares1to6, setSquares1to6] = React.useState("");
  const [squares7and8, setSquares7and8] = React.useState("");
  const [numeroposti, setNumeroPostiF] = React.useState(false);
  const [targa_identificativo, setTargaIdentificativoF] = React.useState(false);
  const [prezzo, setPrezzoF] = React.useState(false);
  const [nome, setNomeF] = React.useState(false);
  
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
                      <Form className="form" name="form_nuovo_veicolo" id="form_nuovo_veicolo">
                        <SelectTipo/>
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
                          id="Targa"
                          name="Targa"
                          placeholder="Targa o Identificativo*"
                          type="text"
                          onFocus={(e) => setTargaIdentificativoF(true)}
                          onBlur={(e) => setTargaIdentificativoF(false)}
                          required
                        />
                        </InputGroup>
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
                          id="Nome"
                          name="Nome"
                          placeholder="Nome*"
                          type="text"
                          onFocus={(e) => setNomeF(true)}
                          onBlur={(e) => setNomeF(false)}
                          required
                        />
                        </InputGroup>
                        <InputGroup
                          className={classnames({
                            "input-group-focus": numeroposti,
                          })}
                        >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="tim-icons icon-square-pin" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          id="NumeroPosti"
                          name="NumeroPosti"
                          placeholder="Numero Posti*"
                          type="number"
                          min="1"
                          max="7"
                          onFocus={(e) => setNumeroPostiF(true)}
                          onBlur={(e) => setNumeroPostiF(false)}
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
                          id="Prezzo"
                          name="Prezzo"
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