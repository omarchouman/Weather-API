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
        <div>
          <ul className="wea-ther">
            
            <li>
              <div className="res-grid"><h3>{this.props.timeOne}</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>{this.props.tempOne}<span>&#8451;</span></h3></div>
             </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>

            <li>
              <div className="res-grid"><h3>21:00</h3>
                 <img src="http://placekitten.com/50/50"></img>
                 <h3>12<span>&#8451;</span></h3></div>
            </li>
           
          </ul>
        </div>
        )
    }
}

export default HoursWeather;