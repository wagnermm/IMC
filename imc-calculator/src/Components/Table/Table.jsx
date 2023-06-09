import { useState } from 'react';
import './Table.css';

function Table() {
    const [table, setTable] = useState("tableStyle__hide");
    const showTable=()=> {
        table === 'tableStyle__hide' ? setTable('tableStyle__visible') : setTable('tableStyle__hide')
    }
    return(
        <div className="table">
            <h2>Tabela IMC</h2>
            <button onClick={showTable} className="btnTable">Click</button>
            <table className={table}>
                <thead>
                    <tr>
                        <th>
                            Classificação
                        </th>
                        <th>
                            IMC
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abaixo do Peso</td>
                        <td>Abaixo de 18,5</td>
                    </tr>
                    <tr>
                        <td>Peso Normal</td>
                        <td>Entre 18,5 e 24,9</td>
                    </tr>
                    <tr>
                        <td>Sobrepeso</td>
                        <td>Entre 25 e 29,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau I</td>
                        <td>Entre 30 e 34,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau II</td>
                        <td>Entre 35 e 39,9</td>
                    </tr>
                    <tr>
                        <td>Obesidade Grau III</td>
                        <td>Maior que 40</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;