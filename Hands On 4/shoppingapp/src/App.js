import logo from './logo.svg';
import './App.css';
import { OnlineShopping } from './Components/OnlineShopping';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <OnlineShopping/>
    </div>
  );
}

export default App;
