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

export default function SelectParcheggio() {
    return (
        <>
            <FormGroup id="selectParcheggio">
                <Label for="parcheggio">Seleziona Parcheggio</Label>
                <Input type="select" name="parcheggio" id="parcheggio" style={{color: "#ba54f5"}}>
                <option value="NONE">---</option>
                <option value="1">Via 1</option>
                <option value="2">Via 2</option>
                <option value="3">Via 3</option>
                <option value="4">Via 4</option>
                </Input>
            </FormGroup>
        </>
  );
}