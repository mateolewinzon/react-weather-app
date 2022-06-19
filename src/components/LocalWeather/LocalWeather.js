import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationCityName } from "../../actions/locationActions";
import { fetchLocalWeather } from "../../actions/weatherActions";
import { useLocation } from "../../hooks/useLocation";
import { selectLocation } from "../../reducers/locationReducer";
import { selectWeather } from "../../reducers/weatherReducer";
import LoadingSpinner from "../common/LoadingSpinner";
import CurrentWeatherBox from "./CurrentWeather";

const LocalWeather = () => {
  const dispatch = useDispatch();
  const { localWeather } = useSelector(selectWeather);
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
        <>
          <Row className="p-4">
            {localName && (
              <Row>
                <h2>{localName}</h2>
              </Row>
            )}
            <Row className="justify-content-center">
              <CurrentWeatherBox />
            </Row>
            <Row className="justify-content-center">forecast</Row>
          </Row>
        </>
      )}
    </Container>
  );
};

export default LocalWeather;
