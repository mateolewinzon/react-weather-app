import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectWeather } from "../../reducers/localWeatherReducer";
import ForecastWeatherCard from "./ForecastWeatherCard";
import { FORECAST_5_DAY } from "../../config/texts";
import "./Forecast.css";

const Forecast = () => {
  const localWeather = useSelector(selectWeather);

  const days = localWeather.data.daily;

  return (
    <Row className="justify-content-center p-4">
      <Row className="justify-content-center p-2">{FORECAST_5_DAY}</Row>
      <Row className="justify-content-center">
        {days.slice(0, 5).map((day, index) => (
          <Col xs="2" className="forecast-col p-0" key={index}>
            <ForecastWeatherCard data={day} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};

export default Forecast;
