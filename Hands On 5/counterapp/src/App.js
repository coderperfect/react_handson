import logo from './logo.svg';
import './App.css';
import { CountPeople } from './Components/CountPeople';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <CountPeople/>
    </div>
  );
}

export default App;
