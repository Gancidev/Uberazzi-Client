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
  Input,
  FormGroup,
  Label,
} from "reactstrap";

function show_button_paga(){
    var paga = document.getElementById("paga");
    paga.style.display="block";
}

export default function mancia() {
    return (
        <>
            <FormGroup id="Mancia" style={{display: "none"}}>
                <Label for="valore_mancia">Imposta Mancia</Label>
                <Input type="number" name="valore_mancia" id="valore_mancia" min="0" style={{color: "#ba54f5"}} onChange={() => show_button_paga()}/>
            </FormGroup>
        </>
  );
}