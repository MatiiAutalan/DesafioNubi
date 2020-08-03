import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container">
      <form>
        <div>
          <input type="text" name="city" placeholder="El tiempo en..." />
        </div>
      </form>
      <button>
          Buscar
      </button>
    </div>
  );
};

export default SearchBar;
