import React, { Component } from 'react';
import './App.css';
import Poster from './Poster/Poster';
import SearchBar from './SearchBar/SearchBar';
import Display from './Display/Display';

const API_key = "3b9d55c144c787244255479141b68ee4";


class App extends Component {

state = {
  temperature: undefined,
  city: undefined,
  country: undefined,
  humidity: undefined,
  description: undefined,
  error: undefined

}

  getData = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
    this.setState({
      temperature: (response.main.temp - 273.17).toFixed(),
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    })
      } else{
        this.setState({
          error: "Something went wrong. Please enter the values"
        })

      }
    }
  render() {
    return (
        <div>
          <div className="wrapper">
          <div className="main">
           <div className="container">
             <div className="row">

            <div className="col-xs-5 title-container">
              <Poster />
            </div>

            <div className="col-xs-7 form-container">
            <SearchBar 
            loadData = {this.getData}
            />
            <Display 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}/>
          
     </div>
    </div>
   </div>
  </div>
</div>
</div>
    )
  }
}



export default App;
