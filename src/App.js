import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import HoursWeather from './components/HoursWeather';
import FakeWeather from "./fakeWeatherData.json";
import "./App.css";

import clear from './img/weather-icons/clear.svg';
import drizzle from './img/weather-icons/drizzle.svg';
import fog from './img/weather-icons/fog.svg';
import mostcloudy from './img/weather-icons/mostlycloudy.svg';
import partcloudy from './img/weather-icons/partlycloudy.svg';
import rain from './img/weather-icons/rain.svg';
import snow from './img/weather-icons/snow.svg';
import storm from './img/weather-icons/storm.svg';
import unknown from './img/weather-icons/unknown.svg';

const API_KEY = "af7e64abd76a500ee810c8f98bbd15cf";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tempertureMin: null,
      tempertureMax: null,
      city: null,
      humid: null,
      pressure: null,
      temptime:[],
      id: null,
      icon: ''
      
    };
  }
  getWeather = async (e) => {
   e.preventDefault();
  const CITY_NAME = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
  console.log(data.list[0].weather[0].id);
  this.setState({
    tempertureMin : Math.floor( data.list[7].main.temp),
    tempertureMax : Math.floor( data.list[0].main.temp),
    humid : Math.floor(data.list[0].main.humidity),
    pressure : Math.floor(data.list[0].main.pressure),
    temptime : data.list,
    id: data.list[0].weather[0].id
  })
  }
  
   getIcon=(id) =>{
    if(id < 300) {
      return storm;
    } else if (id>= 300 && id <= 499) {
      return drizzle;
    } else if (id >= 500 && id <= 599) {
      return rain;
    } else if (id >= 600 && id <= 699) {
      return snow;
    } else if (id >= 700 && id <= 799) {
      return fog;
    } else if (id == 800) {
      return clear;
    } else if (id == 801) {
      return partcloudy;
    } else if (id >= 801 && id <= 805){
      return mostcloudy;
    } else {
      return unknown;
    }
  }
  
  

  render() {
  
  

    return (
      <div className="app">
        <Search getweather = {this.getWeather} />

        <WeatherItem 
          getIcon = {this.getIcon}
          weather={this.state.weather}
          tempertureMin={this.state.tempertureMin}
          tempertureMax={this.state.tempertureMax}
          humid = {this.state.humid} 
          pressure = {this.state.pressure}
          id = {this.state.id}/>
       
        
        <HoursWeather
          temptime = {this.state.temptime}
          getIcon = {this.getIcon}
        />
      </div>
    );
  }
}

export default App;
