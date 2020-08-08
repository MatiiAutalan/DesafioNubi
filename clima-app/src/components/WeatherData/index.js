import React from "react";
import styles from "../WeatherData/styles.module.scss";
import AddFavorites from "../AddFavorites/index"

const WeatherData = (props) => {

  return (
    <div className={styles.container}>
      {props.error && 
        <div>
          <p className={styles.alertError}>{props.error}</p>
        </div>
      }
      {props.temperature ? 
      <div>
        <div className={styles.title}>
        <h1>{props.city}</h1>
        <AddFavorites handleAddFavorite={props.handleAddFavorite({city: props.city, temperature: props.temperature, tempMin: props.tempMin, tempMax: props.tempMax, feelsLike: props.feelsLike, icon: props.icon})}/>
        </div>
        <div className={styles.data}>
          <div className={styles.principalData}>
            <h1>T {props.temperature} °C</h1>
            <h3>ST {props.feelsLike} °C</h3>
            <p>
              <strong>Min {props.tempMin} °C / Max {props.tempMax} °C</strong>
            </p>
          </div>
          <div className={styles.containerIcon}>
            <img src={props.icon} alt="imagen-estado-clima"/>
            <h3>{props.description}</h3>
          </div>
          <div className={styles.secondaryData}>
            <p><strong>Humedad: </strong>{props.humidity} %</p>
            <p><strong>Viento: </strong> {props.wind} m/s</p>
            <p><strong>Visibilidad: </strong>{props.visibility} m</p>
            <p><strong>Presión:</strong> {props.pressure} hPa</p>
          </div>
        </div>
      </div>
       : 
        <div className= {styles.noData}></div>
      }
    </div>
  );
};

export default WeatherData;
