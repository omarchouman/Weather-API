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
         <nav>
           <input type="text"  placeholder="Type in a city name"></input>
           <button type="submit">FIND WEATHER</button>
         </nav>
       </header>

      </div>
    );
  }
}
export default Search;
