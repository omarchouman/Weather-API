import React, { Component } from "react";
import { render } from "react-dom";
import './WeatherItem.css';
import FakeWeather from '../fakeWeatherData.json';
import storm from "../img/weather-icons/storm.svg"
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
           <img style={{width:"300px"}}src={storm}></img>
           <h2>{this.props.tempertureMin}<span>&#176;</span> to {this.props.tempertureMax}<span>&#8451;</span></h2>
           <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidity</span> {this.props.humid}%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> 
           {this.props.pressure}</p>
         </div>
        </main>
      </div>
    );
  }
}

