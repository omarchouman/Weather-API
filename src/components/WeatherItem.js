import React, { Component } from "react";
import { render } from "react-dom";
import './WeatherItem.css';

export default class WeatherItem extends Component {
  render() {
    return (
      <div>
       <main>
         <div className="app__main">
           <img src="http://placekitten.com/g/200/300"></img>
           <h2>Temperature 12<span>&#176;</span> to 13<span>&#8451;</span></h2>
           <p><span style={{fontWeight:"bold" , marginRight:"1rem"}}>Humidty</span> 78%  <span style = {{fontWeight:"bold" , margin:"0 1rem"}}>Pressure</span> 1000.8</p>
         </div>
        </main>
      </div>
    );
  }
}

