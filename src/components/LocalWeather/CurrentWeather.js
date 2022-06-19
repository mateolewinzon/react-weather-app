import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import convertTemp from "../../utils/convertTemp";
import { selectWeather } from "../../reducers/weatherReducer";
import WeatherImage from "../common/WeatherImage";
import "./CurrentWeather.css";

const CurrentWeatherBox = () => {
  const { localWeather } = useSelector(selectWeather);

  return (
    <>
      <Col xs="auto">
        <WeatherImage size="lg" weatherData={localWeather.data.current} />
      </Col>
      <Col xs="auto">
        <div className="current-temp">
          {convertTemp(localWeather.data.current.temp)}
        </div>
        <div className="current-temp-unit">°C</div>
      </Col>
    </>
  );
};

export default CurrentWeatherBox;
