import logo from './logo.svg';
import './App.css';
import { ComplaintRegister } from './Components/ComplaintRegister';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <ComplaintRegister/>
      </div>
    </div>
  );
}

export default App;
