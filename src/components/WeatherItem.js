import React, { Component } from "react";
import { render } from "react-dom";
import './WeatherItem.css';

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
           <h2>Temperature {this.props.temp1}<span>&#176;</span> to {this.props.temp2}<span>&#8451;</span></h2>
           <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidty</span> {this.props.humidity}%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> {this.props.pressure}</p>
         </div>
        </main>
      </div>
    );
  }
}

