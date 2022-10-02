
import { Card, Col, Row } from "react-bootstrap";
import { WeatherImage } from "components";
import convertTempFromK from "utils/convertTemp";
import { getDayAndMonth } from "utils/convertDate";
import { MAX_TEMP, MIN_TEMP } from "config/texts";

type Props = {
  data: { [key: string]: any }
}

export const LocalForecastCard = ({ data }: Props) => (
  <Card className="forecast-card text-center">
    <Card.Title>{getDayAndMonth(data.dt)}</Card.Title>
    <Row className="text-center">
      <WeatherImage weatherData={data} />
    </Row>
    <Row className="text-center">
      <Col>{MIN_TEMP}</Col>
      <Col>{convertTempFromK(data.temp.min)} °C</Col>
    </Row>
    <Row className="text-center">
      <Col>{MAX_TEMP}</Col>
      <Col>{convertTempFromK(data.temp.max)} °C</Col>
    </Row>
  </Card>
);