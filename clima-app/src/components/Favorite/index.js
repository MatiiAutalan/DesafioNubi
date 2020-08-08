import React from "react";

import styles from "./styles.module.scss";

const Favorite = ({ favorite }) => {
  const { city, temperature, tempMin, tempMax } = favorite;
  return (
    <div className={styles.container}>
      <p className={styles.title}>{city}</p>
      <p>T {temperature} °C</p>
      <p>Min {tempMin} °C</p>
      <p>Max {tempMax} °C</p>
    </div>
  );
};

export default Favorite;
