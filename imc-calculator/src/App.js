import Table from './Components/Table/Table';
import Calc from './Components/Calc/Calc'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculadora IMC</h2>
        <Calc/>
        <h2>Tabela IMC</h2>
        <Table/>
      </header>
    </div>
  );
}
