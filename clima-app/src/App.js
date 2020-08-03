import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import WeatherData from "./components/WeatherData"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <WeatherData/>
    </div>
  );
}

export default App;
