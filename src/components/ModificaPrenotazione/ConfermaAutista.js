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

function cambiamento(){
    var check=document.getElementById("Autista");
    var mancia = document.getElementById("Mancia");
    var paga;
    if(check.checked===false){
        mancia.style.display="none";
        paga = document.getElementById("paga");
        paga.style.display="block";
    }
    else{
        mancia.style.display="block";
        paga = document.getElementById("paga");
        paga.style.display="none";
    }
}

export default function Conferma_autista() {
    
    return (
        <>
            <FormGroup check className="mt-3" id="Autista_box">
                <Label check>
                <Input defaultChecked type="checkbox" id="Autista" name="Autista" onChange={cambiamento}/>
                <span className="form-check-sign" />
                    Assegnami un Autista!
                </Label>
            </FormGroup>
        </>
  );
}