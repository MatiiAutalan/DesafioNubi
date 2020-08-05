import React from "react";
import styles from "../WeatherData/styles.module.scss";

const WeatherData = (props) => {
  return (
    <div className={styles.container}>
      {props.error && 
        <div>
          <p className={styles.alertError}>{props.error}</p>
        </div>
      }
      {props.temperature ? 
      <div className={styles.containerData}>
        <h1>{props.city}</h1>
        <div className={styles.data}>
          <div className={styles.principalData}>
            <h1>T {props.temperature} °C</h1>
            <h3>ST {props.feelsLike} °C</h3>
            <h3>{props.description}</h3>
          </div>
          <div>
            <img src={props.icon} alt="imagen estado clima"/>
          </div>
          <div className={styles.secondaryData}>
            <p>
              Min {props.tempMin} / Max {props.tempMax}
            </p>
            <p>Humedad: {props.humidity} %</p>
            <p>Viento: {props.wind} m/s</p>
            <p>Visibilidad: {props.visibility} m</p>
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
