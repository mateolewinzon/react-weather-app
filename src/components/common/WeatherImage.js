import React from "react";
import { Image } from "react-bootstrap";
import { URL_PARAMS } from "../../config/endpoints";
import getLargeWeatherImage from "../../utils/getLargeWeatherImage";
import "./WeatherImage.css";

const WeatherImage = ({ weatherData, size }) => {

  const isLarge = size === "lg"
  const iconId = weatherData.weather[0].icon

  const src =
  isLarge
      ? `images/weather/${getLargeWeatherImage(weatherData)}.png`
      : URL_PARAMS.icons(iconId);

  return (
    <Image
      alt={isLarge ? getLargeWeatherImage(weatherData) : iconId}
      className={`image-${size}`}
      src={src}
    />
  );
};

export default WeatherImage;
