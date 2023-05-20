import Table from './Components/Table/Table';
import Weight from './Components/Weight/Weight';
import Height from './Components/Height/Height';
import Calc from './Components/Calc/Calc';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculadora IMC</h2>
        <Weight/>
        <Height/>
        <Calc/>
        <h2>Tabela IMC</h2>
        <Table/>
      </header>
    </div>
  );
}

export default App;
