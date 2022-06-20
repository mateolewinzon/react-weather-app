import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { FORECAST_5_DAY, MAX_TEMP, MIN_TEMP } from "../../config/texts";
import { selectWeather } from "../../reducers/localWeatherReducer";
import { getDayAndMonth } from "../../utils/convertDate";
import convertTempFromK from "../../utils/convertTemp";
import WeatherImage from "../common/WeatherImage";
import "./Forecast.css";

const Forecast = () => {
  const localWeather = useSelector(selectWeather);

  const days = localWeather.data.daily

  return (
    <Row className="justify-content-center p-2">
      <Row className="justify-content-center">
      {FORECAST_5_DAY}
      </Row>
      {days.slice(0, 5).map((day, index) => (
        <Col className="p-0" xs="2" key={index}>
          <Card className="forecast-card text-center">
            <Card.Title>{getDayAndMonth(day.dt)}</Card.Title>
            <Row className="text-center">
              <WeatherImage weatherData={day} size="sm" />
            </Row>
            <Row className="text-center">
              <Col>{MIN_TEMP}</Col>
              <Col>{convertTempFromK(day.temp.min)} °C</Col>
            </Row>
            <Row className="text-center">
              <Col>{MAX_TEMP}</Col>
              <Col>{convertTempFromK(day.temp.max)} °C</Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Forecast;
