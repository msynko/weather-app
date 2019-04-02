import React, { Component } from 'react';
import './App.css';
import Poster from './Poster/Poster';
import SearchBar from './SearchBar/SearchBar';
import Display from './Display/Display';

class App extends Component {
  render() {
    return (
     
        <div>
            <Poster />
            <SearchBar />
            <Display />

        </div>
      
    );
  }
}

export default App;
