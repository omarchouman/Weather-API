import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import HoursWeather from './components/HoursWeather';
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Omar Chouman - Abdulrhman Soukarieh"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />

        <WeatherItem temp1="12" temp2="13" humidity="78" pressure="1000.8"/>
        
        <HoursWeather />
      </div>
    );
  }
}

export default App;
