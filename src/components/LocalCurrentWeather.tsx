
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { WeatherImage } from ".";
import { selectWeather } from "reducers/localWeatherReducer";
import convertTemp from "utils/convertTemp";
import "styles/CurrentWeather.css";

export const LocalCurrentWeather = () => {
  const localWeather = useSelector(selectWeather);

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