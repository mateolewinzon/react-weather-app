import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationCityName } from "../../actions/locationActions";
import { fetchLocalWeather } from "../../actions/weatherActions";
import { useLocation } from "../../hooks/useLocation";
import { selectLocation } from "../../reducers/locationReducer";
import { selectWeather } from "../../reducers/localWeatherReducer";
import LoadingSpinner from "../common/LoadingSpinner";
import CurrentWeatherBox from "./CurrentWeather";
import Forecast from "./Forecast";

const LocalWeather = () => {
  const dispatch = useDispatch();
  const localWeather = useSelector(selectWeather);
  const { currentLocation, localName } = useSelector(selectLocation);
  const { getLocation } = useLocation();

  useEffect(() => {
    if (!currentLocation) {
      getLocation();
    }

    if (!localName) {
      dispatch(fetchLocationCityName(currentLocation));
    }

    if (!localWeather.data) {
      dispatch(fetchLocalWeather(currentLocation));
    }
  }, [localWeather, currentLocation, localName]);


  return (
    <Container>
      {localWeather.isLoading ? (
        <LoadingSpinner size="lg" />
      ) : (
       localWeather.data && <Row className="pt-4 text-center">
          <Row>
            <h2>Clima en {localName}</h2>
          </Row>
          <CurrentWeatherBox />
          <Forecast />
        </Row>
      )}
    </Container>
  );
};

export default LocalWeather;
