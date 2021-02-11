import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Welcome from './Components/Welcome';
import CurrencyCoverter from './Components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div style={{marginLeft: '10px'}}>
        <Counter/>
        <Welcome/>
        <CurrencyCoverter/>
      </div>
    </div>
  );
}

export default App;