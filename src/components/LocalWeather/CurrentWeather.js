import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import convertTemp from "../../utils/convertTemp";
import { selectWeather } from "../../reducers/weatherReducer";
import WeatherImage from "../common/WeatherImage";
import "./CurrentWeather.css";

const CurrentWeatherBox = () => {
  const { localWeather } = useSelector(selectWeather);

  return (
    <Row className="justify-content-center">
      <Col xs="auto">
        <WeatherImage size="lg" weatherData={localWeather.data.current} />
      </Col>
      <Col xs="auto">
        <div className="current-temp">
          {convertTemp(localWeather.data.current.temp)}
        </div>
        <div className="current-temp-unit">°C</div>
      </Col>
    </Row>
  );
};

export default CurrentWeatherBox;
