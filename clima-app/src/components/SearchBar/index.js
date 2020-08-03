import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.getWeather}>
        <div>
          <input type="text" name="city" placeholder="El tiempo en..." />
        </div>
        <button>Buscar</button>
      </form>
    </div>
  );
};

export default SearchBar;
