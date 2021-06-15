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

export default function Select_Permessi() {
    return (
        <>
            <FormGroup id="selectPermessi">
                <Label for="selezione_permessi">Seleziona Ruolo</Label>
                <Input type="select" name="selezione_permessi" id="selezione_permessi" style={{color: "#ba54f5"}}>
                <option value="cliente">Cliente</option>
                <option value="autista">Autista</option>
                <option value="addetto">Addetto al Parcheggio</option>
                <option value="admin">Amministratore</option>
                </Input>
            </FormGroup>
        </>
  );
}