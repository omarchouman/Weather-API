import React, { Component } from 'react';
import './WeatherItem.css';

class HoursWeather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
    render() {
        return (
        <div className="wea-ther">
             {this.props.temptime.map(lsit =>   <li>
              <div className="res-grid"><h3>{new Date(lsit.dt_txt).getHours().toString() + ":00"}</h3>
                 <img src={this.props.getIcon(lsit.weather[0].id)}></img>
                 <h3>{lsit.main.temp}<span>&#8451;</span></h3></div>
             </li> 
             )}
        </div>
        )
    }
}

export default HoursWeather;