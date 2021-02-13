import logo from './logo.svg';
import './App.css';
import Greeting from './Components/Greeting';
import React, { Component } from 'react';
import { Booking } from './Components/HandsOn9';
import HandsOn10App from './Components/HandsOn10App';

class App extends Component{
  state = {
    isLoggedIn: false
  }

  toggleLoggedIn = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    });
  }


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
  
        <div style={{marginLeft: '500px', marginTop: '100px'}}>
          <Greeting isLoggedIn={this.state.isLoggedIn} toggleLoggedIn = {this.toggleLoggedIn}/>
        </div>
      </div>
    );
  }
}

export default App;
