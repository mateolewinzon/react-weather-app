import {
  IP_LOCATION_API_ENDPOINT,
  REVERSE_GEOCODING_ENDPOINT,
  URL_PARAMS,
} from "../config/endpoints";
import { get } from "./publicService";

export const getIpLocation = async () => {
  const response = await get(IP_LOCATION_API_ENDPOINT);
  return response;
};

export const reverseGeolocate = async (lat, lon) => {
  const response = await get(
    REVERSE_GEOCODING_ENDPOINT +
      URL_PARAMS.coords(
        { lat, lon },
        process.env.REACT_APP_OPENWEATHER_API_KEY
      )
  );
  return response;
};
