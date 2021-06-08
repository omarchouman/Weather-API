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
              <div className="res-grid"><h3>{lsit.dt_txt}</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>{lsit.main.temp}<span>&#8451;</span></h3></div>
             </li> 
             )}

        </div>
        )
    }
}

export default HoursWeather;