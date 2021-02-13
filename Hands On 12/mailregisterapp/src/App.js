import logo from './logo.svg';
import './App.css';
import { Register } from './Components/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div>
        <Register/>
      </div>
    </div>
  );
}

export default App;
