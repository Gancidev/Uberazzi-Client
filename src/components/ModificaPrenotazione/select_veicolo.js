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
    var selezione = document.getElementById("selezione");
    var autista = document.getElementById("Autista");
    var mancia = document.getElementById("Mancia");
    var paga = document.getElementById("paga");

    if(selezione.value==="Auto"){
        autista.style.display="block";
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
                <Label for="Select">Seleziona Veicolo</Label>
                <Input type="select" name="select" id="selezione" style={{color: "#ba54f5"}} onChange={() => show_option_autista()}>
                <option value="NONE">---</option>
                <option value="Auto">Auto</option>
                <option value="Moto">Moto</option>
                <option value="Bici">Bici</option>
                <option value="Monopattino">Monopattino</option>
                </Input>
            </FormGroup>
        </>
  );
}