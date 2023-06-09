import Table from './Components/Table/Table';
import Calc from './Components/Calc/Calc';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calc/>
        <Table/>
      </header>
    </div>
  );
}
