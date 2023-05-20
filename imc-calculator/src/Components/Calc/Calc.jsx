import React from "react";
import { useState } from "react";

import './Calc.css'

function Calc() {
    const [result, setResult] = useState();
    function resultado(weight,height) {
        setResult(weight/(height*height))
    }
    return(
        <div className="calcStyle">
            <button onClick={resultado}>Calcular</button>
            <div>{result}</div>
        </div>
    )
}

export default Calc