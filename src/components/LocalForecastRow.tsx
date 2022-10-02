
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LocalForecastCard } from "components";
import { selectWeather } from "reducers/localWeatherReducer";
import { FORECAST_5_DAY } from "config/texts";
import "styles/Forecast.css";

export const LocalForecastRow = () => {
  const localWeather = useSelector(selectWeather);

  const days = localWeather.data.daily;

  return (
    <Row className="justify-content-center p-4">
      <Row className="justify-content-center p-2">{FORECAST_5_DAY}</Row>
      <Row className="justify-content-center">
        {days.slice(0, 5).map((day, index) => (
          <Col xs="2" className="forecast-col p-0" key={index}>
            <LocalForecastCard data={day} />
          </Col>
        ))}
      </Row>
    </Row>
  );
};