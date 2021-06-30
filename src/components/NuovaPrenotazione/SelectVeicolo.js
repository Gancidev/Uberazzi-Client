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
    var paga;
    if(selezione.options[selezione.selectedIndex].innerHTML.split(":")[0]==="Auto" || selezione.options[selezione.selectedIndex].innerHTML.split(":")[0]==="auto"){
        autista.style.display="block";
        paga = document.getElementById("paga");
        paga.style.display="block";
    }
    else if(selezione.value==="NONE"){
        autista.style.display="none";
        paga = document.getElementById("paga");
        paga.style.display="none";
    }
    else{
        autista.style.display="none";
        paga = document.getElementById("paga");
        paga.style.display="block";
    }
}

export default function select_veicolo() {
    return (
        <>
            <FormGroup id="selectVeicoli" style={{display: "none"}}>
                <Label for="IDVeicolo">Seleziona Veicolo</Label>
                <Input type="select" name="IDVeicolo" id="IDVeicolo" style={{color: "#ba54f5"}} onChange={() => show_option_autista()}>
                <option value="NONE">---</option>
                </Input>
            </FormGroup>
        </>
  );
}