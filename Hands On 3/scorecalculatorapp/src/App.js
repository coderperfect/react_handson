import logo from './logo.svg';
import './App.css';
import {CalculateScore} from './Components/CalculatorScore';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <CalculateScore
        Name={"Steve"}
        School={"DAV Public School"}
        total={284}
        goal={3}
      />
    </div>
  );
}

export default App;
