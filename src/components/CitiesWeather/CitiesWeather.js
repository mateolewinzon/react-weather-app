import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { selectCitiesState } from "../../reducers/selectedCitiesReducer";
import CityCard from "./CityCard";

const CitiesWeather = () => {
  const { selected } = useSelector(selectCitiesState);
  return (
    <Container className="p-4">
      <Row className="justify-content-center">
        {selected.map((city, index) => (
          <Col xs='12' sm='6' md='4' lg='3' xl='2' >
            <CityCard city={city} index={index} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CitiesWeather;
