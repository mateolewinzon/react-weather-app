import React, { useEffect } from "react";
import { Alert, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationCityName } from "../../actions/locationActions";
import { fetchLocalWeather } from "../../actions/localWeatherActions";
import { useLocation } from "../../hooks/useLocation";
import { selectLocation } from "../../reducers/locationReducer";
import { selectWeather } from "../../reducers/localWeatherReducer";
import LoadingSpinner from "../common/LoadingSpinner";
import CurrentWeatherBox from "./CurrentWeather";
import Forecast from "./ForecastRow";
import { ERROR_LOCAL_WEATHER } from "../../config/texts";

const LocalWeather = () => {
  const dispatch = useDispatch();
  const localWeather = useSelector(selectWeather);
  const location = useSelector(selectLocation);
  const { getLocation } = useLocation();
  const { currentLocation, localName } = location

  useEffect(() => {
    if (!currentLocation) {
      getLocation();
    }

    if (!localName) {
      dispatch(fetchLocationCityName(currentLocation));
    }

    if (currentLocation) {
      dispatch(fetchLocalWeather(currentLocation));
    }
  }, [currentLocation, currentLocation]);

  return location.isLoading || localWeather.isLoading ? (
    <LoadingSpinner size="lg" />
  ) : (
    <Row className="pt-4 text-center">
      {localWeather.data ? (
        <>
          <Row>
            <h2>Clima en {localName}</h2>
          </Row>
          <CurrentWeatherBox />
          <Forecast />
        </>
      ) : (
        <Alert>{ERROR_LOCAL_WEATHER}</Alert>
      )}
    </Row>
  );
};

export default LocalWeather;
