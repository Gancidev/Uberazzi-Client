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

export default function select_veicolo() {
    return (
        <>
            <FormGroup id="selectVeicoli">
                <Label for="IDVeicolo">Seleziona Veicolo</Label>
                <Input type="select" name="IDVeicolo" id="IDVeicolo" style={{color: "#ba54f5"}}>
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