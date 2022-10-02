import { useEffect } from "react";
import { Alert, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LoadingSpinner, LocalCurrentWeather, LocalForecastRow } from "components";
import { fetchLocationCityName } from "actions/locationActions";
import { fetchLocalWeather } from "actions/localWeatherActions";
import { useLocation } from "hooks/useLocation";
import { selectLocation } from "reducers/locationReducer";
import { selectWeather } from "reducers/localWeatherReducer";
import { ERROR_LOCAL_WEATHER, WEATHER_IN } from "config/texts";
import { useAppDispatch } from "app/store";

export const LocalSection = () => {
  const dispatch = useAppDispatch();
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
  }, [currentLocation]);

  return location.isLoading || localWeather.isLoading ? (
    <LoadingSpinner />
  ) : (
    <Row className="pt-4 text-center">
      {localWeather.data ? (
        <>
          <Row>
            <h2>{WEATHER_IN} {localName}</h2>
          </Row>
          <LocalCurrentWeather />
          <LocalForecastRow />
        </>
      ) : (
        <Alert>{ERROR_LOCAL_WEATHER}</Alert>
      )}
    </Row>
  );
};