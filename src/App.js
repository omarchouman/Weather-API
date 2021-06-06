import React, { Component } from "react";
import Search from './components/Search';
import WeatherItem from './components/WeatherItem';
import HoursWeather from './components/HoursWeather';
import FakeWeather from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    let weather = FakeWeather.list.slice(0, 8);
    this.state = {
      weather
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <Search />

        <WeatherItem weather={this.state.weather}/>
        
        <HoursWeather />
      </div>
    );
  }
}

export default App;
