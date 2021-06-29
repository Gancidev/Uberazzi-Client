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

function show_option_autista(){
    var selezione = document.getElementById("IDVeicolo");
    var autista = document.getElementById("Autista_box");
    var mancia = document.getElementById("Mancia");
    var paga = document.getElementById("paga");
    if(selezione.value==="1"){
        autista.style.display="block";
        paga.style.display="block";
    }
    else if(selezione.value==="NONE"){
        autista.style.display="none";
        paga.style.display="none";
    }
    else{
        autista.style.display="none";
        mancia.style.display="none";
        paga.style.display="block";
    }
}

export default function select_veicolo() {
    return (
        <>
            <FormGroup id="selectVeicoli">
                <Label for="IDVeicolo">Seleziona Veicolo</Label>
                <Input type="select" name="IDVeicolo" id="IDVeicolo" style={{color: "#ba54f5"}} onChange={() => show_option_autista()}>
                <option value="NONE">---</option>
                <option value="1">Auto</option>
                <option value="2">Moto</option>
                <option value="3">Bici</option>
                <option value="4">Monopattino</option>
                </Input>
            </FormGroup>
        </>
  );
}