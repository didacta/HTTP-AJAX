import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import FriendsList from './components/friendsList.js';


class App extends Component {
  render() {
    return (

      <header className="App">
        <h1>Friends </h1>
        <FriendsList />
    
      </header>

    )
  }
}
export default App;
