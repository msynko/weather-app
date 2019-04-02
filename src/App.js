import React, { Component } from 'react';
import './App.css';
import Poster from './Poster/Poster';
import SearchBar from './SearchBar/SearchBar';
import Display from './Display/Display';

const API_key = "3b9d55c144c787244255479141b68ee4";

class App extends Component {

  loadData = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
    
      }
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
