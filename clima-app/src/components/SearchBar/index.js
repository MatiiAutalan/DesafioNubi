import React from "react";
import styles from "../SearchBar/styles.module.scss";

const SearchBar = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>¡Bienvenidxs a Clima-App!</h1>
      <h2 className={styles.subtitle}>
        Busca el clima actual de más de 20000 ciudades disponibles.
      </h2>
      <div>
        <form onSubmit={props.getWeather}>
          <div>
            <input type="text" name="city" placeholder="El tiempo en..." />
          </div>
          <button>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
