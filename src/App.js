import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import HoursWeather from './components/HoursWeather';
import FakeWeather from "./fakeWeatherData.json";
import "./App.css";
const API_KEY = "af7e64abd76a500ee810c8f98bbd15cf";


class App extends Component {
  constructor(props) {
    super(props);
    let weather = FakeWeather.list.slice(0, 8);
    this.state = {
      weather,
      tempertureMin: null,
      tempertureMax: null,
      city: null,
      humid: null,
      pressure: null,
    
      temptime:[]
       
    };
  }
  getWeather = async (e) => {
   e.preventDefault();
  const CITY_NAME = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
  this.setState({
    tempertureMin : Math.floor( data.list[7].main.temp),
    tempertureMax : Math.floor( data.list[0].main.temp),
    humid : Math.floor(data.list[0].main.humidity),
    pressure : Math.floor(data.list[0].main.pressure),
  
    temptime : data.list

  })
  }
  

  render() {
    return (
      <div className="app">
        <Search getweather = {this.getWeather} />

        <WeatherItem weather={this.state.weather}
          tempertureMin={this.state.tempertureMin}
          tempertureMax={this.state.tempertureMax}
          humid = {this.state.humid} 
          pressure = {this.state.pressure}/>
       
        
        <HoursWeather
          temptime = {this.state.temptime}
        />
      </div>
    );
  }
}

export default App;
