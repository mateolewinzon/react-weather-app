import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectWeather } from "../../reducers/weatherReducer";
import convertTempFromK from "../../utils/convertTemp";
import "./Forecast.css";

const Forecast = () => {
  const { localWeather } = useSelector(selectWeather);

  return (
    <Row className="justify-content-center">
      {localWeather.data.daily.slice(0, 5).map((day, index) => (
        <Col data-testid="forecast-col" key={index}>
          <Card className="forecast-card">
            <Row>
              <Col>Min</Col>
              <Col>{convertTempFromK(day.temp.min)} °C</Col>
            </Row>
            <Row>
              <Col>Max</Col>
              <Col>{convertTempFromK(day.temp.max)} °C</Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Forecast;
