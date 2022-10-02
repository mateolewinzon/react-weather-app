
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CityCard } from ".";
import { selectCitiesState } from "reducers/selectedCitiesReducer";
import { CITIES_WEATHER } from "config/texts";


export const CitiesSection = () => {
  const { selected } = useSelector(selectCitiesState);

  const WeatherCardsData = [
    ...selected,
    ...new Array(5 - selected.length).fill({}),
  ];

  return (
    <Row className="justify-content-center p-4">
      <Row className="justify-content-center">{CITIES_WEATHER}</Row>
      <Row className="justify-content-center p-2">
        {WeatherCardsData.map((city, index) => (
          <Col key={index} xs="12" sm="6" md="4" lg="3" xl="2">
            <CityCard cityIndex={index} city={city} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};