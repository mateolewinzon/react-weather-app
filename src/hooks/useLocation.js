import { fetchLocationWithIp, setExactLocation } from "../actions/locationActions";
import { store } from "../app/store";

export const useLocation = () => {
  const getLocation = () => {
    store.dispatch(fetchLocationWithIp())

    navigator.geolocation.getCurrentPosition((position, error) => {
      console.log(position,error)
      if (position?.coords) {
        store.dispatch(setExactLocation({lat: position.coords.latitude, lon: position.coords.longitude}))
      }
    });
  };

  return { getLocation };
};
