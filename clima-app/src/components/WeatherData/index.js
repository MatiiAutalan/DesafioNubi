import React from "react";

const WeatherData = (props) => {

  return (
    <div>
      {props.error && 
        <div>
          <p>{props.error}</p>
        </div>
      }
      {props.temperature ? 
        <div>
          <h1>{props.city}</h1>
          <div>
            <div>
              <h1>{props.temperature} °C</h1>
              <h3>ST {props.feelsLike} °C</h3>
              <h3>{props.description}</h3>
            </div>
            <div>
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
        <div><p>Ingresa una ciudad</p></div>
      }
    </div>
  );
};

export default WeatherData;
