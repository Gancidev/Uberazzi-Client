/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

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
    if(selezione.value==="Auto"){
        autista.style.display="block";
    }
    else{
        autista.style.display="none";
        var paga = document.getElementById("paga");
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