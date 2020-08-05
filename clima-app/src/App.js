import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import { fetchWeather } from "./services/serviceWeather";

class App extends Component {
  state = {
    city: "",
    temperature: "",
    feelsLike: "",
    wind: "",
    description: "",
    visibility: "",
    humidity: "",
    tempMin: "",
    tempMax: "",
    icon: "",
    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;
    
    
      const response = await fetchWeather(cityValue);
    if (response.data.name !== undefined) { 
      console.log(response.data.weather[0].icon)
      this.setState({
        city: response.data.name,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        wind: response.data.wind.speed,
        description: response.data.weather[0].description,
        visibility: response.data.visibility,
        humidity: response.data.main.humidity,
        tempMin: response.data.main.temp_min,
        tempMax: response.data.main.temp_max,
        icon: "http://openweathermap.org/img/wn/"+response.data.weather[0].icon+"@4x.png",
        error: null,
      });
    } else {
      this.setState({error: "¡Por favor ingrese una ciudad valida!"})
    }
  };

  render() {
    return (
      <div className="App">
        <SearchBar getWeather={this.getWeather} />
        <WeatherData {...this.state} />
      </div>
    );
  }
}

export default App;
