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
import Checkbox from '@material-ui/core/Checkbox';

// reactstrap components
import {
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default function Conferma_autista() {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (event) => {
    setChecked(event.target.checked);
    var mancia = document.getElementById("Mancia");
    if(event.target.checked===false)
        mancia.style.display="none";
    else
        mancia.style.display="block";
  };
    return (
        <>
            <FormGroup check className="mt-3" id="Autista">
                <Label check>
                <Input defaultChecked type="checkbox" checked={checked} onChange={handleChange}/>
                <span className="form-check-sign" />
                    Assegnami un Autista!
                </Label>
            </FormGroup>
        </>
  );
}