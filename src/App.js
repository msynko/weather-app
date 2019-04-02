import React, { Component } from 'react';
import './App.css';
import Poster from './Poster/Poster';
import SearchBar from './SearchBar/SearchBar';


class App extends Component {
  render() {
    return (
     
        <div>
            <Poster />
            <SearchBar />

        </div>
      
    );
  }
}

export default App;
