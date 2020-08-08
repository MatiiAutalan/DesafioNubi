import api from "./api.js";

export const fetchWeather = city => 
    api.get(`weather?q=${city}&appid=c67b0b21c61247d55fc4164781075cd6&units=metric&lang=sp`);
    