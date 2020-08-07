import React from "react";

import styles from "./styles.module.scss";

const Favorite = ({favorite}) => {
  const {city, temperature, tempMin, tempMax, feelsLike, icon} = favorite;
  return (
    <div className={styles.container}>
    <p>{city}</p>
    <p>{temperature}</p>
    <p>{tempMin}</p>
    <p>{tempMax}</p>
    <p>{feelsLike}</p>
    <img src={icon} alt="imagen-estado-clima"/>
    </div>
  );
};

export default Favorite;
