
import { Card, Row } from "react-bootstrap";
import { WeatherImage } from "components";
import convertTempFromK from "utils/convertTemp";

type State = { currentWeather: { [key: string]: any } }

export const CityCardContent = ({ currentWeather }: State) => {
  return (
    <Card.Body data-testid='selected-city-card'>
      <Row>
        <WeatherImage weatherData={currentWeather} />
      </Row>
      <Row>
        <div>{convertTempFromK(currentWeather.temp)} °C</div>
      </Row>
    </Card.Body>
  );
};