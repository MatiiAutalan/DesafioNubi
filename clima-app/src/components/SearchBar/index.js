import React from "react";
import styles from "../SearchBar/styles.module.scss";

const SearchBar = (props) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>
        Busca el clima actual de más de 200.000 ciudades disponibles.
      </h2>
      <div>
        <form onSubmit={props.getWeather}>
          <div>
            <input autoFocus type="text" name="city" placeholder="El clima en..."/>
          </div>
          <button>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
