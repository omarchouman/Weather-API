import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./../App.css";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        {/* ---------Header-------------- */} 
       
       <header className="app_header">
         <form onSubmit = {this.props.getweather}  >
           <input type="text" name="city" placeholder="Type in a city name"></input>
           <button type="submit" >FIND WEATHER</button>
         </form>
       </header>

      </div>
    );
  }
}
export default Search;
