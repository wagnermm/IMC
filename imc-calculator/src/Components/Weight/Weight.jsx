import React from "react";
import { useState } from "react";

import './Weight.css';

function Weight() {
    const [weight, setWeight] = useState();
    return(
        <div className="weightField">
            <label>Peso</label>
            <input type="text" placeholder="Digite o seu peso" value={weight} oneChange={function(ent) {
                setWeight(ent.target.value);
            }} />
        </div>
    )
}

export default Weight;