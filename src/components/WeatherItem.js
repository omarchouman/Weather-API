import React, { Component } from "react";
import { render } from "react-dom";
import './WeatherItem.css';
import FakeWeather from '../fakeWeatherData.json';

export default class WeatherItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  render() {
    return (
      <div>
       <main>
         <div className="app__main">
           <img src="http://placekitten.com/g/200/300"></img>
           <h2>Temperature {Math.floor(FakeWeather.list[0].main.temp - 273.15)}<span>&#176;</span> to {Math.floor(FakeWeather.list[1].main.temp - 273.15)}<span>&#8451;</span></h2>
           <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidity</span> {FakeWeather.list[0].main.humidity}%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> {FakeWeather.list[0].main.pressure}</p>
         </div>
        </main>
      </div>
    );
  }
}

