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

export default function SelectTipo() {
    return (
        <>
            <FormGroup id="selectTipo">
                <Label for="TipoVeicolo">Seleziona Tipologia</Label>
                <Input type="select" name="TipoVeicolo" id="TipoVeicolo" style={{color: "#ba54f5"}}>
                <option value="NONE">---</option>
                <option value="Auto">Auto</option>
                <option value="Moto">Moto</option>
                <option value="Monopattino">Monopattino</option>
                <option value="Bici">Bici</option>
                </Input>
            </FormGroup>
        </>
  );
}