import logo from './logo.svg';
import './App.css';
import { ListofPlayers, Scorebelow70 } from './Components/ListofPlayers';
import { OddPlayers, EvenPlayers, IndianPlayers, ListofIndianPlayers } from './Components/IndianPlayers';

function App() {
  const players = [
    {name: "Jack", score: 50},
    {name: "Michael", score: 70},
    {name: "John", score: 40},
    {name: "Ann", score: 61},
    {name: "Elisabeth", score: 61},
    {name: "Sachin", score: 95},
    {name: "Dhoni", score: 100},
    {name: "Virat", score: 84},
    {name: "Jadeja", score: 64},
    {name: "Raina", score: 75},
    {name: "Rohit", score: 80},
  ];

  const IndianTeam = ["Sachin1", "Dhoni2", "Virat3", "Rohit4", "Yuvaraj5", "Raina6"]

  var flag = false;

  if(flag === true){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div style={{marginLeft:'10px'}}>
          <h1>List of Players</h1>
          <ListofPlayers players={players}/>
        </div>

          <hr/>
        <div style={{marginLeft:'10px'}}>
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players}/>
        </div>
      </div>
    );
  }
  else{
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div style={{marginLeft:'10px'}}>
        <h1>Indian Team</h1>
        <h1>Odd Players</h1>
        {OddPlayers(IndianTeam)}
        </div>

        <hr/>

        <div style={{marginLeft:'10px'}}>
        <h1>Even Players</h1>
        {EvenPlayers(IndianTeam)}
        </div>

        <hr/>

        <div style={{marginLeft:'10px'}}>
        <h1>List of Indian Players Merged:</h1>
        <ListofIndianPlayers IndianPlayers={IndianPlayers}/>
        </div>
      </div>
    );
  }
}

export default App;
