import React from "react";
import { useState } from "react";

import './Height.css'

function Height() {
    const [height, setHeight] = useState();
    return(
        <div className="heightField">
            <label>Altura</label>
            <input type="text" placeholder="Digite a sua altura" value={height} onRateChange={function(ent) {
                setHeight(ent.target.value);
            }} />
        </div>
    )
}

export default Height;