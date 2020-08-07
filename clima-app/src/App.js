import React, { Component } from "react";
import "./App.scss";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData";
import Favorite from "./components/Favorite";
import EmptyFavourite from './components/Favorite/components/EmptyFavorite';
import { fetchWeather } from "./services/serviceWeather";

let favorites = [];
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
    pressure: "",
    error: null,
    favorites2: []
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;
    
    
      const response = await fetchWeather(cityValue);
    if (response.data.name !== undefined) { 
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
        pressure: response.data.main.pressure,
        error: null,
      });
    } else {
      this.setState({error: "¡Por favor ingrese una ciudad valida!"})
    }
  };

  handleAddFavorite = ({city, temperature, tempMin, tempMax, feelsLike, icon}) => () => {
    favorites.push({city, temperature, tempMin, tempMax, feelsLike, icon});
    this.setState({ favorites2: favorites})
  }
   
  render() {
    return (
      <div className="App">
        <div className="SearchContent">
          <SearchBar getWeather={this.getWeather} />
          <WeatherData {...this.state} handleAddFavorite={this.handleAddFavorite} />
        </div>
        <div className="Favourite">
          <h1 className="FavoriteTitle">Favoritos</h1>
          <div className="FavoritesCards">
            {this.state.favorites2.length > 0 ? this.state.favorites2.map(favorite => <Favorite favorite={favorite} />) : <EmptyFavourite />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;