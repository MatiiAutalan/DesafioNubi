import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import { fetchWeather } from "./services/serviceWeather"

class App extends Component {

  getWeather = async e => {
    e.preventDefault()
    const { city } = e.target.elements;
    const cityValue = city.value;

    const response = await fetchWeather(cityValue);
    console.log(response.data);
  };

  render() {
    return (
      <div className="App">
        <SearchBar getWeather={this.getWeather} />
        <WeatherData />
      </div>
    );
  }
}

export default App;
