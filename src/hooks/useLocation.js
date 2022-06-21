import {
  fetchLocationWithIp,
  setExactLocation,
} from "../actions/locationActions";
import {resetLocalWeather} from "../actions/localWeatherActions";

import { store } from "../app/store";

export const useLocation = () => {
  const getLocation = () => {
    store.dispatch(fetchLocationWithIp());

    navigator.geolocation.getCurrentPosition((position) => {
      if (position?.coords) {
        store.dispatch(resetLocalWeather())
        store.dispatch(
          setExactLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        );
      }
    });
  };

  return { getLocation };
};
