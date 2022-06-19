import React from "react";
import { Image } from "react-bootstrap";
import getLargeWeatherImage from "../../utils/getLargeWeatherImage";
import "./WeatherImage.css";

const WeatherImage = ({ weatherData, size }) => {
  const src =
    size === "lg"
      ? `images/weather/${getLargeWeatherImage(weatherData)}.png`
      : weatherData.weather[0].id;

  return <Image className={`image-${size}`} src={src} />;
};

export default WeatherImage;
