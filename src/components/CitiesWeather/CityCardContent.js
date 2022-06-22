import React from "react";
import { Card, Row } from "react-bootstrap";
import WeatherImage from "../common/WeatherImage";
import convertTempFromK from "../../utils/convertTemp";

const CardContent = ({ currentWeather }) => {
  return (
    <Card.Body data-testid='selected-city-card'>
      <Row>
        <WeatherImage size="sm" weatherData={currentWeather} />
      </Row>
      <Row>
        <div>{convertTempFromK(currentWeather.temp)} °C</div>
      </Row>
    </Card.Body>
  );
};

export default CardContent;
