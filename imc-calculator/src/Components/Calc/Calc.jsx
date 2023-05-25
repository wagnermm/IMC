import React,{useState} from "react";

import './Calc.css';

function Calc() {
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [result, setResult] = useState();

    function calculateImc() {
        setResult(weight/(height*height))
    }

    return (
        <div className="calculator">
            <h2>Calculadora IMC</h2>
            <div className="measures">
                <div>
                    <label>Peso</label>
                    <input type="number" placeholder="Digite o seu peso" value={weight} onChange={function(ent) {
                        setWeight(ent.target.value);
                    }}/>
                </div>
                <div>
                    <label>Altura</label>
                    <input type="number" placeholder="Digite a sua altura" value={height} onChange={function(ent) {
                        setHeight(ent.target.value);
                    }}/>
                </div>
            </div>
            <div>
                <button onClick={calculateImc}>calcular</button>
                <div><p>Resultado: {result}</p></div>
            </div> 
        </div>
    )
}

export default Calc