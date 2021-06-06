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
      tempertureMin: undefined,
      tempertureMax: undefined,
      city: undefined,
      humid: undefined,
      pressure:undefined,
      timeOne: undefined,
      timeTow: undefined,
      tempOne:undefined,
      tempTow:undefined
    };
  }
  getWeather = async (e) => {
   e.preventDefault();
  const CITY_NAME = e.target.elements.city.value;
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${CITY_NAME}&cnt=8&units=metric&appid=${API_KEY}`);
  const data = await api_call.json();
  console.log(data);
  this.setState({
    tempertureMin : Math.floor( data.list[0].main.temp),
    tempertureMax : Math.floor( data.list[7].main.temp),
    humid : Math.floor(data.list[0].main.humidity),
    pressure : Math.floor(data.list[0].main.pressure),
    timeOne :data.list[1].dt_txt,
    tempOne : Math.floor(data.list[1].main.temp)

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
          tempOne = {this.state.tempOne}
         
          tempTow = {this.state.tempTow}
          tempThree = {this.state.tempThree}
          tempFour = {this.state.tempFour}
          tempFive = {this.state.tempFive}
          tempSix = {this.state.tempSix }
          tempSeven = {this.state.tempSeven} 
          timeOne = {this.state.timeOne}
          timeTow = {this.state.timeTow}/>
      </div>
    );
  }
}

export default App;
