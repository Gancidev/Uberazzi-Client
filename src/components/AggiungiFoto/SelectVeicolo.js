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
  FormGroup,
  Input,
  Label,
} from "reactstrap";

function stampa_veicoli(veicoli){
  veicoli = JSON.parse(veicoli);
  var form = document.getElementById("form_immagine");
  var select = document.getElementById("IDVeicolo");
  var p, option;
  if(veicoli.length===0){
    p = document.createElement("p");
    p.innerHTML="Nessun Veicolo Esistente";
    form.appendChild(p);
    var bottone = document.getElementById("invia");
    bottone.style.display="none";
    var img = document.getElementById("immagine");
    img.style.display="none";
    return false;
  }
  for(var i=1;i<veicoli.length+1;i++){
      option = document.createElement("option");
      option.value=veicoli[i-1].IDVeicolo;
      option.innerHTML=veicoli[i-1].Nome+"-"+veicoli[i-1].Targa;
      select.appendChild(option);
  }
}

var flag;
function richiedi_lista_veicoli(){
    if(flag===true){
        return true;
    }
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onload = function() { 
        if (xmlHttp.status === 200){
          stampa_veicoli(xmlHttp.responseText);
        }
        else if(xmlHttp.status === 403){
            alert("Non hai i permessi per accedere qui");
            window.location.replace("/home");
        }
    }
    xmlHttp.open("GET", "http://91.199.223.61:3001/api/lista_veicoli", true); // true for asynchronous
    //ACCESSO AI DATI UTENTE POST LOGIN
    let utente = JSON.parse(window.localStorage.getItem("Utente"));
    utente = JSON.parse(utente);
    xmlHttp.setRequestHeader("idutente", utente.id);
    xmlHttp.setRequestHeader("x-access-token", utente.accessToken);
    xmlHttp.send(null);
    flag=true;
}

export default function select_veicolo() {
  richiedi_lista_veicoli();
    return (
        <>
            <FormGroup id="selectVeicoli">
                <Label for="IDVeicolo">Seleziona Veicolo</Label>
                <Input type="select" name="IDVeicolo" id="IDVeicolo" style={{color: "#ba54f5"}}>
                  <option value="NONE">---</option>
                </Input>
            </FormGroup>
        </>
  );
}